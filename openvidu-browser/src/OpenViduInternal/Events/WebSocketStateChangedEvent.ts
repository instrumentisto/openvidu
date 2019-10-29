import {Event} from "./Event";
import {WebSocketState} from '../Enums/WebSocketState';
import {Session} from "../..";

/**
 * Defines websocket state changed event.
 */
export class WebSocketStateChangedEvent extends Event {

  state: WebSocketState;
  error: undefined | Object;

  /**
   * @hidden
   */
  constructor(cancelable: boolean, target: Session, type: string, value: WebSocketState, error?:Object) {
    super(cancelable, target, type);
    this.state = value;
    this.error = error;
  }

  /**
   * @hidden
   */
  callDefaultBehavior() {
    // Does nothing.
  }
}
