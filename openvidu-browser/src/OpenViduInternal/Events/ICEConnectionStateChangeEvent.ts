import {Event} from "./Event";
import { Stream } from "../..";

/**
 * ICE connection state change event.
 */
export class ICEConnectionStateChangeEvent extends Event{

  /**
   * ICE Connection state change event type.
   */
  static  ICE_CONNECTION_STATE_CHANGE_EVENT:string = 'iceConnectionStateChangeEvent';

  /**
   * Current ICE Connection state.
   */
  iceConnectionState: RTCIceConnectionState;

  /**
   * @hidden
   */
  constructor(cancelable: boolean, target: Stream, type: string, value: RTCIceConnectionState) {
    super(cancelable, target, type);
    this.iceConnectionState = value;
  }

  /**
   * @hidden
   */
  callDefaultBehavior() {
    // Does nothing.
  }
}
