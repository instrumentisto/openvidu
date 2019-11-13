import { Event } from "./Event";
import { MediaFlowQualityValue } from '../Enums/MediaFlowQualityValue';
import { Publisher, Session, Subscriber, Stream } from "../..";
/**
 * Defines quality changed event.
 */
export declare class MediaFlowQualityChangeEvent extends Event {
    /**
     * Stream object that was created or destroyed
     */
    stream: Stream;
    /**
     * Value of current quality.
     */
    qualityValue: MediaFlowQualityValue;
    /**
     * @hidden
     */
    constructor(cancelable: boolean, target: Session | Publisher | Subscriber, type: string, stream: Stream, value: MediaFlowQualityValue);
    /**
     * @hidden
     */
    callDefaultBehavior(): void;
}
