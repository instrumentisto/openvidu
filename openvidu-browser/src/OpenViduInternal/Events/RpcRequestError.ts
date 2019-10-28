import {Event} from "./Event";
import {Publisher, Session, Subscriber} from "../..";

/**
 * Defines rpc request error event.
 */
export class RpcRequestError extends Event {

  error: Object;

  /**
   * @hidden
   */
  constructor(cancelable: boolean, target: Session | Publisher | Subscriber, type: string, error: Object) {
    super(cancelable, target, type);
    this.error = error;
  }

  /**
   * @hidden
   */
  callDefaultBehavior() {
    // Does nothing.
  }
}
