/**
 * Quality indicator enum.
 * Defines media flow quality values.
 */
export enum QualityValue {

  /**
   * All media flows are flowing.
   */
  FLOWING = 1,

  /**
   * One media flow is flowing.
   */
  PARTIALLY_FLOWING,

  /**
   * All media flows are not flowing.
   */
  NOT_FLOWING
}
