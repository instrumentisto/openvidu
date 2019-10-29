"use strict";
var Logger = console;
var MAX_RETRY_TIME_MS = 10000;
var RECONNECT_RETRY_INTERVAL_STEP = 1500;
var WS_STATE_CLOSING = 2;
function WebSocketWithReconnection(config) {
    var totalNumRetries = 1;
    var registerMessageHandler;
    var reconnecting = false;
    var ws;
    function onOpen() {
        totalNumRetries = 1;
        if (reconnecting === true) {
            registerMessageHandler();
            if (config.onreconnected) {
                config.onreconnected();
            }
            reconnecting = false;
        }
        else {
            if (config.onconnected) {
                config.onconnected();
            }
        }
    }
    function onClose(event) {
        removeAllListeners();
        Logger.log("Close Web Socket code: " + event.code + " reason: " + event.reason);
        var scheduleReconnect = true;
        if (event.code === 1000) {
            scheduleReconnect = false;
        }
        else if (event.code > 4000) {
            scheduleReconnect = false;
            if (config.onerror) {
                config.onerror(event.reason);
            }
        }
        if (config.ondisconnect) {
            config.ondisconnect(event.code, scheduleReconnect);
        }
        if (reconnecting === false && scheduleReconnect) {
            reconnecting = true;
            reconnect(RECONNECT_RETRY_INTERVAL_STEP * totalNumRetries);
        }
    }
    function onError(event) {
        removeAllListeners();
        if (config.onerror) {
            config.onerror("Web socket establishing error");
        }
        reconnect(RECONNECT_RETRY_INTERVAL_STEP * totalNumRetries);
    }
    function resetWebSocket(config) {
        if (ws) {
            removeAllListeners();
        }
        var newWS;
        if (config.useSockJS) {
            newWS = new SockJS(config.uri);
        }
        else {
            newWS = new WebSocket(config.uri);
        }
        newWS.addEventListener("open", onOpen);
        newWS.addEventListener("close", onClose);
        newWS.addEventListener("error", onError);
        return newWS;
    }
    function removeAllListeners() {
        ws.removeEventListener("open", onOpen);
        ws.removeEventListener("error", onError);
        ws.removeEventListener("close", onClose);
    }
    function reconnect(reconnectInterval) {
        if (reconnectInterval > MAX_RETRY_TIME_MS) {
            if (config.onstopreconnectattempts) {
                config.onstopreconnectattempts();
            }
        }
        else {
            totalNumRetries++;
            setTimeout(function () {
                if (config.onreconnecting) {
                    config.onreconnecting();
                }
                ws = resetWebSocket(config);
            }, reconnectInterval);
        }
    }
    ws = resetWebSocket(config);
    this.close = function (code, reason) {
        if (ws.readyState < WS_STATE_CLOSING) {
            ws.close(code, reason);
        }
    };
    this.forceClose = function (millis) {
        Logger.debug("Testing: Force WebSocket close");
        if (millis) {
            Logger.log("Testing: Change wsUri for " + millis
                + " millis to simulate net failure");
            setTimeout(function () {
                ws.close(1000, "Test close for reconnect with timeout");
            }, millis);
        }
        else {
            ws.close(1000, "Test close for reconnect");
        }
    };
    this.reconnectWs = function () {
        Logger.log("reconnectWs");
        if (config.onreconnectinit) {
            config.onreconnectinit();
        }
        ws.close(1000, "Close Web socket for reconnection");
    };
    this.send = function (message) {
        ws.send(message);
    };
    this.addEventListener = function (type, callback) {
        registerMessageHandler = function () {
            ws.addEventListener(type, callback);
        };
        registerMessageHandler();
    };
}
module.exports = WebSocketWithReconnection;
//# sourceMappingURL=webSocketWithReconnection.js.map