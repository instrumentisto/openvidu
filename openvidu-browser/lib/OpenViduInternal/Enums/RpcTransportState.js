"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var RpcTransportState = /** @class */ (function () {
    function RpcTransportState(name) {
        this.name = name;
    }
    return RpcTransportState;
}());
exports.RpcTransportState = RpcTransportState;
(function (RpcTransportState) {
    var Disconnected = /** @class */ (function (_super) {
        __extends(Disconnected, _super);
        function Disconnected(code, reason) {
            var _this = _super.call(this, "Disconnected") || this;
            _this.code = code;
            _this.reason = reason;
            return _this;
        }
        return Disconnected;
    }(RpcTransportState));
    RpcTransportState.Disconnected = Disconnected;
    var Error = /** @class */ (function (_super) {
        __extends(Error, _super);
        function Error(error) {
            var _this = _super.call(this, "Error") || this;
            _this.error = error;
            return _this;
        }
        return Error;
    }(RpcTransportState));
    RpcTransportState.Error = Error;
    var ReconnectInit = /** @class */ (function (_super) {
        __extends(ReconnectInit, _super);
        function ReconnectInit() {
            return _super.call(this, "ReconnectInit") || this;
        }
        return ReconnectInit;
    }(RpcTransportState));
    RpcTransportState.ReconnectInit = ReconnectInit;
    var Reconnecting = /** @class */ (function (_super) {
        __extends(Reconnecting, _super);
        function Reconnecting() {
            return _super.call(this, "Reconnecting") || this;
        }
        return Reconnecting;
    }(RpcTransportState));
    RpcTransportState.Reconnecting = Reconnecting;
    var Reconnected = /** @class */ (function (_super) {
        __extends(Reconnected, _super);
        function Reconnected() {
            return _super.call(this, "Reconnected") || this;
        }
        return Reconnected;
    }(RpcTransportState));
    RpcTransportState.Reconnected = Reconnected;
    var StoppedReconnectionAttempts = /** @class */ (function (_super) {
        __extends(StoppedReconnectionAttempts, _super);
        function StoppedReconnectionAttempts() {
            return _super.call(this, "StoppedReconnectionAttempts") || this;
        }
        return StoppedReconnectionAttempts;
    }(RpcTransportState));
    RpcTransportState.StoppedReconnectionAttempts = StoppedReconnectionAttempts;
})(RpcTransportState = exports.RpcTransportState || (exports.RpcTransportState = {}));
exports.RpcTransportState = RpcTransportState;
//# sourceMappingURL=RpcTransportState.js.map