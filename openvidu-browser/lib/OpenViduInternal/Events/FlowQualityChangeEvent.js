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
 * Defines quality changed event.
 */
var FlowQualityChangeEvent = /** @class */ (function (_super) {
    __extends(FlowQualityChangeEvent, _super);
    /**
     * @hidden
     */
    function FlowQualityChangeEvent(cancelable, target, type, stream, value) {
        var _this = _super.call(this, cancelable, target, type) || this;
        _this.stream = stream;
        _this.qualityValue = value;
        return _this;
    }
    /**
     * @hidden
     */
    FlowQualityChangeEvent.prototype.callDefaultBehavior = function () {
        // Does nothing.
    };
    return FlowQualityChangeEvent;
}(Event_1.Event));
exports.FlowQualityChangeEvent = FlowQualityChangeEvent;
//# sourceMappingURL=FlowQualityChangeEvent.js.map