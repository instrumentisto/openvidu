import {Event} from "./Event";
import {RpcTransportState} from '../Enums/RpcTransportState';
import {Session} from "../..";

/**
 * Defines websocket state changed event.
 */
export class RpcTransportStateChangedEvent extends Event {

  state: RpcTransportState;
  error: undefined | Object;

  /**
   * @hidden
   */
  constructor(cancelable: boolean, target: Session, type: string, state: RpcTransportState, error?:Object) {
    super(cancelable, target, type);
    this.state = state;
    this.error = error;
  }

  /**
   * @hidden
   */
  callDefaultBehavior() {
    // Does nothing.
  }
}
