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
var Event_1 = require("./Event");
/**
 * Defines websocket state changed event.
 */
var RpcTransportStateChangedEvent = /** @class */ (function (_super) {
    __extends(RpcTransportStateChangedEvent, _super);
    /**
     * @hidden
     */
    function RpcTransportStateChangedEvent(cancelable, target, type, state) {
        var _this = _super.call(this, cancelable, target, type) || this;
        _this.state = state;
        return _this;
    }
    /**
     * @hidden
     */
    RpcTransportStateChangedEvent.prototype.callDefaultBehavior = function () {
        // Does nothing.
    };
    return RpcTransportStateChangedEvent;
}(Event_1.Event));
exports.RpcTransportStateChangedEvent = RpcTransportStateChangedEvent;
//# sourceMappingURL=RpcTransportStateChangedEvent.js.map