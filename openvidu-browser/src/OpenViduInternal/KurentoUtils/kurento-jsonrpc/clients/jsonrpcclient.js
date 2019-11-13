/*
 * (C) Copyright 2014 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

var RpcBuilder = require('../');
var WebSocketWithReconnection = require('./transports/webSocketWithReconnection');

Date.now = Date.now || function() {
    return +new Date;
};

var PING_INTERVAL = 5000;

var Logger = console;

/**
 *
 * heartbeat: interval in ms for each heartbeat message,
 * sendCloseMessage : true / false, before closing the connection, it sends a closeSession message
 * <pre>
 * ws : {
 * 	uri : URI to conntect to,
 *  useSockJS : true (use SockJS) / false (use WebSocket) by default,
 * 	onconnected : callback method to invoke when connection is successful,
 * 	ondisconnect : callback method to invoke when the connection is lost,
 * 	onreconnecting : callback method to invoke when the client is reconnecting,
 * 	onreconnected : callback method to invoke when the client successfully reconnects,
 * 	onerror : callback method to invoke when there is an error
 * },
 * rpc : {
 * 	requestTimeout : timeout for a request,
 * 	sessionStatusChanged: callback method for changes in session status,
 * 	mediaRenegotiation: mediaRenegotiation
 * }
 * </pre>
 */
function JsonRpcClient(configuration) {

    var self = this;

    var wsConfig = configuration.ws;

    var notReconnectIfNumLessThan = -1;

    var pingNextNum = 0;
    var enabledPings = true;
    var pingPongStarted = false;
    var pingInterval;

    var ondisconnect = wsConfig.ondisconnect;
    var onreconnectinit = wsConfig.onreconnectinit;
    var onreconnecting = wsConfig.onreconnecting;
    var onreconnected = wsConfig.onreconnected;
    var onconnected = wsConfig.onconnected;
    var onerror = wsConfig.onerror;
    var onstopreconnectattempts = wsConfig.onstopreconnectattempts;

    configuration.rpc.pull = function (params, request) {
        request.reply(null, "push");
    };

    wsConfig.onconnected = function () {
        enabledPings = true;
        usePing();

        if (onconnected) {
            onconnected();
        }
    };

    wsConfig.ondisconnect = function(code, reason) {

        clearInterval(pingInterval);
        pingPongStarted = false;
        enabledPings = false;
        pingNextNum = -1;
        rpc.cancel();

        if (ondisconnect) {
            ondisconnect(code, reason);
        }
    };

    wsConfig.onreconnected = function () {
        enabledPings = true;
        updateNotReconnectIfLessThan();

        if (onreconnected) {
            onreconnected();
        }
    };

    wsConfig.onreconnectinit = function(){
        if (onreconnectinit) {
            onreconnectinit();
        }
    };

    wsConfig.onstopreconnectattempts = function(){
        if (onstopreconnectattempts) {
            onstopreconnectattempts();
        }
    };

    wsConfig.onerror = function (error) {
        if (onerror) {
            onerror(error);
        }
    };

    wsConfig.onreconnecting = function () {
        if (onreconnecting) {
            onreconnecting();
        }
    };

    var ws = new WebSocketWithReconnection(wsConfig);

    Logger.debug('Connecting websocket to URI: ' + wsConfig.uri);

    var rpcBuilderOptions = {
        request_timeout: configuration.rpc.requestTimeout,
        ping_request_timeout: configuration.rpc.heartbeatRequestTimeout
    };

    var rpc = new RpcBuilder(RpcBuilder.packers.JsonRPC, rpcBuilderOptions, ws,
        function (request) {

            Logger.debug('Received request: ' + JSON.stringify(request));

            try {
                var func = configuration.rpc[request.method];

                if (func === undefined) {
                    Logger.error("Method " + request.method + " not registered in client");
                } else {
                    func(request.params, request);
                }
            } catch (err) {
                Logger.error('Exception processing request: ' + JSON.stringify(request));
                Logger.error(err);
            }
        });

    this.send = function (method, params, callback) {
        if (method !== 'ping') {
            Logger.debug('Request: method:' + method + " params:" + JSON.stringify(params));
        }

        var requestTime = Date.now();

        rpc.encode(method, params, function (error, result) {
            if (error) {
                try {
                    Logger.error("ERROR:" + error.message + " in Request: method:" +
                        method + " params:" + JSON.stringify(params) + " request:" +
                        error.request);
                    if (error.data) {
                        Logger.error("ERROR DATA:" + JSON.stringify(error.data));
                    }
                } catch (e) {
                }
                error.requestTime = requestTime;

                if (configuration.rpc.rpcRequestError) {
                    configuration.rpc.rpcRequestError(error);
                }
            }
            if (callback) {
                if (result != undefined && result.value !== 'pong') {
                    Logger.debug('Response: ' + JSON.stringify(result));
                }
                callback(error, result);
            }
        });
    };

    function updateNotReconnectIfLessThan() {
        notReconnectIfNumLessThan = pingNextNum;
    }

    function sendPing() {
        if (enabledPings) {
            var params = null;
            if (pingNextNum == 0 || pingNextNum == notReconnectIfNumLessThan) {
                params = {
                    interval: configuration.heartbeat || PING_INTERVAL
                };
            }
            pingNextNum++;

            self.send('ping', params, (function (pingNum) {
                return function (error, result) {
                    if (error) {
                        Logger.debug("Error in ping request #" + pingNum + " (" +
                            error.message + ")");
                        if (pingNum > notReconnectIfNumLessThan) {
                            enabledPings = false;
                            updateNotReconnectIfLessThan();
                            Logger.debug("Server did not respond to ping message #" +
                                pingNum + ". Reconnecting... ");
                            ws.reconnectWs();
                        }
                    }
                }
            })(pingNextNum));
        } else {
            Logger.debug("Trying to send ping, but ping is not enabled");
        }
    }

    /*
    * If configuration.hearbeat has any value, the ping-pong will work with the interval
    * of configuration.hearbeat
    */
    function usePing() {
        if (!pingPongStarted) {
            Logger.debug("Starting ping (if configured)")
            pingPongStarted = true;

            if (configuration.heartbeat != undefined) {
                pingInterval = setInterval(sendPing, configuration.heartbeat);
                sendPing();
            }
        }
    }

    this.close = function (code, reason) {
        Logger.debug("Closing  with code: " + code + " because: " + reason);

        if (pingInterval != undefined) {
            Logger.debug("Clearing ping interval");
            clearInterval(pingInterval);
        }
        pingPongStarted = false;
        enabledPings = false;

        if (configuration.sendCloseMessage) {
            Logger.debug("Sending close message")
            this.send('closeSession', null, function (error, result) {
                if (error) {
                    Logger.error("Error sending close message: " + JSON.stringify(error));
                }
                ws.close(code, reason);
            });
        } else {
            ws.close(code, reason);
        }
    };

    // This method is only for testing
    this.forceClose = function (millis) {
        ws.forceClose(millis);
    };

    this.reconnect = function () {
        ws.reconnectWs();
    };

    this.resetPing = function () {
        enabledPings = true;
        pingNextNum = 0;
        usePing();
    }
}


module.exports = JsonRpcClient;
