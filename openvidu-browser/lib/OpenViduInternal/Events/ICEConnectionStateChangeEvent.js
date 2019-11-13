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
 * ICE connection state change event.
 */
var ICEConnectionStateChangeEvent = /** @class */ (function (_super) {
    __extends(ICEConnectionStateChangeEvent, _super);
    /**
     * @hidden
     */
    function ICEConnectionStateChangeEvent(cancelable, target, type, value) {
        var _this = _super.call(this, cancelable, target, type) || this;
        _this.iceConnectionState = value;
        return _this;
    }
    /**
     * @hidden
     */
    ICEConnectionStateChangeEvent.prototype.callDefaultBehavior = function () {
        // Does nothing.
    };
    /**
     * ICE Connection state change event type.
     */
    ICEConnectionStateChangeEvent.ICE_CONNECTION_STATE_CHANGE_EVENT = 'iceConnectionStateChangeEvent';
    return ICEConnectionStateChangeEvent;
}(Event_1.Event));
exports.ICEConnectionStateChangeEvent = ICEConnectionStateChangeEvent;
//# sourceMappingURL=ICEConnectionStateChangeEvent.js.map