import { Event } from "./Event";
import { Stream } from "../..";
/**
 * ICE connection state change event.
 */
export declare class ICEConnectionStateChangeEvent extends Event {
    /**
     * ICE Connection state change event type.
     */
    static ICE_CONNECTION_STATE_CHANGE_EVENT: string;
    /**
     * Current ICE Connection state.
     */
    iceConnectionState: RTCIceConnectionState;
    /**
     * @hidden
     */
    constructor(cancelable: boolean, target: Stream, type: string, value: RTCIceConnectionState);
    /**
     * @hidden
     */
    callDefaultBehavior(): void;
}
