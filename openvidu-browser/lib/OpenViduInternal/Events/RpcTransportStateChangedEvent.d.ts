import { Event } from "./Event";
import { RpcTransportState } from '../Enums/RpcTransportState';
import { Session } from "../..";
/**
 * Defines websocket state changed event.
 */
export declare class RpcTransportStateChangedEvent extends Event {
    state: RpcTransportState;
    /**
     * @hidden
     */
    constructor(cancelable: boolean, target: Session, type: string, state: RpcTransportState);
    /**
     * @hidden
     */
    callDefaultBehavior(): void;
}
