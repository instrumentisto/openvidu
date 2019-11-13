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
var MediaFlowQualityChangeEvent = /** @class */ (function (_super) {
    __extends(MediaFlowQualityChangeEvent, _super);
    /**
     * @hidden
     */
    function MediaFlowQualityChangeEvent(cancelable, target, type, stream, value) {
        var _this = _super.call(this, cancelable, target, type) || this;
        _this.stream = stream;
        _this.qualityValue = value;
        return _this;
    }
    /**
     * @hidden
     */
    MediaFlowQualityChangeEvent.prototype.callDefaultBehavior = function () {
        // Does nothing.
    };
    return MediaFlowQualityChangeEvent;
}(Event_1.Event));
exports.MediaFlowQualityChangeEvent = MediaFlowQualityChangeEvent;
//# sourceMappingURL=MediaFlowQualityChangeEvent.js.map