/**
 * Quality indicator enum.
 * Defines media flow quality values.
 */
export enum MediaFlowQualityValue {

  /**
   * Media flows are not initialized in the moment.
   */
  NOT_INITIALIZED,

  /**
   * All media flows are flowing.
   */
  FLOWING,

  /**
   * One media flow is flowing.
   */
  PARTIALLY_FLOWING,

  /**
   * All media flows are not flowing.
   */
  NOT_FLOWING
}
