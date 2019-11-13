import {Event} from "./Event";
import {RpcTransportState} from '../Enums/RpcTransportState';
import {Session} from "../..";

/**
 * Defines websocket state changed event.
 */
export class RpcTransportStateChangedEvent extends Event {

  state: RpcTransportState;

  /**
   * @hidden
   */
  constructor(cancelable: boolean, target: Session, type: string, state: RpcTransportState) {
    super(cancelable, target, type);
    this.state = state;
  }

  /**
   * @hidden
   */
  callDefaultBehavior() {
    // Does nothing.
  }
}
