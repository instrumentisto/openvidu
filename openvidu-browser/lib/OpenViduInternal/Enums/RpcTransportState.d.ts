export declare class RpcTransportState {
    readonly name: string;
    protected constructor(name: string);
}
export declare namespace RpcTransportState {
    class Disconnected extends RpcTransportState {
        readonly code: number;
        readonly reason: string;
        constructor(code: number, reason: string);
    }
    class Error extends RpcTransportState {
        readonly error: string;
        constructor(error: string);
    }
    class ReconnectInit extends RpcTransportState {
        constructor();
    }
    class Reconnecting extends RpcTransportState {
        constructor();
    }
    class Reconnected extends RpcTransportState {
        constructor();
    }
    class StoppedReconnectionAttempts extends RpcTransportState {
        constructor();
    }
}
