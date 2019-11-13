import { Event } from "./Event";
import { QualityValue } from '../Enums/QualityValue';
import { Publisher, Session, Subscriber, Stream } from "../..";
/**
 * Defines quality changed event.
 */
export declare class FlowQualityChangeEvent extends Event {
    /**
     * Stream object that was created or destroyed
     */
    stream: Stream;
    /**
     * Value of current quality.
     */
    qualityValue: QualityValue;
    /**
     * @hidden
     */
    constructor(cancelable: boolean, target: Session | Publisher | Subscriber, type: string, stream: Stream, value: QualityValue);
    /**
     * @hidden
     */
    callDefaultBehavior(): void;
}
