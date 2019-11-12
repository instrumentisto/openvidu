"use strict";
exports.__esModule = true;
/**
 * Quality indicator enum.
 * Defines media flow quality values.
 */
var MediaFlowQualityValue;
(function (MediaFlowQualityValue) {
    /**
     * Media flows are not initialized in the moment.
     */
    MediaFlowQualityValue[MediaFlowQualityValue["NOT_INITIALIZED"] = 0] = "NOT_INITIALIZED";
    /**
     * All media flows are flowing.
     */
    MediaFlowQualityValue[MediaFlowQualityValue["FLOWING"] = 1] = "FLOWING";
    /**
     * One media flow is flowing.
     */
    MediaFlowQualityValue[MediaFlowQualityValue["PARTIALLY_FLOWING"] = 2] = "PARTIALLY_FLOWING";
    /**
     * All media flows are not flowing.
     */
    MediaFlowQualityValue[MediaFlowQualityValue["NOT_FLOWING"] = 3] = "NOT_FLOWING";
})(MediaFlowQualityValue = exports.MediaFlowQualityValue || (exports.MediaFlowQualityValue = {}));
//# sourceMappingURL=MediaFlowQualityValue.js.map