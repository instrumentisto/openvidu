/**
 * Quality indicator enum.
 * Defines media flow quality values.
 */
export declare enum MediaFlowQualityValue {
    /**
     * Media flows are not initialized in the moment.
     */
    NOT_INITIALIZED = 0,
    /**
     * All media flows are flowing.
     */
    FLOWING = 1,
    /**
     * One media flow is flowing.
     */
    PARTIALLY_FLOWING = 2,
    /**
     * All media flows are not flowing.
     */
    NOT_FLOWING = 3
}
