import { Event } from "./Event";
import { Session } from "../..";
/**
 * Defines rpc request error event.
 */
export declare class RpcRequestErrorEvent extends Event {
    error: Object;
    /**
     * @hidden
     */
    constructor(cancelable: boolean, target: Session, type: string, error: Object);
    /**
     * @hidden
     */
    callDefaultBehavior(): void;
}
