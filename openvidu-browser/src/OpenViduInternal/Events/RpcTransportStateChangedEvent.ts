import {Event} from "./Event";
import {RpcTransportState} from '../Enums/RpcTransportState';
import {Session} from "../..";

/**
 * Defines websocket state changed event.
 */
export class RpcTransportStateChangedEvent extends Event {

  state: String;
  error: undefined | Object;
  code: undefined | Object;

  /**
   * @hidden
   */
  constructor(cancelable: boolean, target: Session, type: string, state: RpcTransportState, error?:Object, code?:Object) {
    super(cancelable, target, type);
    this.state = RpcTransportState[state];
    this.error = error;
    this.code = code;
  }

  /**
   * @hidden
   */
  callDefaultBehavior() {
    // Does nothing.
  }
}
