"use strict";
// class TransportState {
//
//     static DISCONNECTED = class extends TransportState {
//         readonly code: number;
//         readonly reason: string;
//
//         constructor(code: number, reason: string) {
//             super();
//             this.code = code;
//             this.reason = reason
//         }
//     };
//
//     static ERROR = class extends TransportState {
//         readonly error: string;
//
//         constructor(error: string) {
//             super();
//             this.error = error;
//         }
//     };
//
//     static RECONNECT_INIT = class extends TransportState {
//         constructor() {
//             super()
//         }
//     };
//
//     static RECONNECTING = class extends TransportState {
//         constructor() {
//             super()
//         }
//     };
//
//     static RECONNECTED = class extends TransportState {
//         constructor() {
//             super()
//         }
//     };
//
//     static STOPPED_RECONNECTION_ATTEMPTS = class extends TransportState {
//         constructor() {
//             super()
//         }
//     };
//
//     private constructor() {
//     }
// }
//
// namespace TransportState {
//     export type DISCONNECTED = InstanceType<typeof TransportState.DISCONNECTED>;
// }
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
var TransportState = /** @class */ (function () {
    function TransportState() {
    }
    return TransportState;
}());
exports.TransportState = TransportState;
(function (TransportState) {
    var Disconnected = /** @class */ (function (_super) {
        __extends(Disconnected, _super);
        function Disconnected(code, reason) {
            var _this = _super.call(this) || this;
            _this.code = code;
            _this.reason = reason;
            return _this;
        }
        return Disconnected;
    }(TransportState));
    TransportState.Disconnected = Disconnected;
    var Error = /** @class */ (function (_super) {
        __extends(Error, _super);
        function Error(error) {
            var _this = _super.call(this) || this;
            _this.error = error;
            return _this;
        }
        return Error;
    }(TransportState));
    TransportState.Error = Error;
    var ReconnectInit = /** @class */ (function (_super) {
        __extends(ReconnectInit, _super);
        function ReconnectInit() {
            return _super.call(this) || this;
        }
        return ReconnectInit;
    }(TransportState));
    TransportState.ReconnectInit = ReconnectInit;
    var Reconnecting = /** @class */ (function (_super) {
        __extends(Reconnecting, _super);
        function Reconnecting() {
            return _super.call(this) || this;
        }
        return Reconnecting;
    }(TransportState));
    TransportState.Reconnecting = Reconnecting;
    var Reconnected = /** @class */ (function (_super) {
        __extends(Reconnected, _super);
        function Reconnected() {
            return _super.call(this) || this;
        }
        return Reconnected;
    }(TransportState));
    TransportState.Reconnected = Reconnected;
    var StoppedReconnectionAttempts = /** @class */ (function (_super) {
        __extends(StoppedReconnectionAttempts, _super);
        function StoppedReconnectionAttempts() {
            return _super.call(this) || this;
        }
        return StoppedReconnectionAttempts;
    }(TransportState));
    TransportState.StoppedReconnectionAttempts = StoppedReconnectionAttempts;
})(TransportState = exports.TransportState || (exports.TransportState = {}));
exports.TransportState = TransportState;
//# sourceMappingURL=TestHuest.js.map