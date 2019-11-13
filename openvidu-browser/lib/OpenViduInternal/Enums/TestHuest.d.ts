export declare class TransportState {
    protected constructor();
}
export declare namespace TransportState {
    class Disconnected extends TransportState {
        readonly code: number;
        readonly reason: string;
        constructor(code: number, reason: string);
    }
    class Error extends TransportState {
        readonly error: string;
        constructor(error: string);
    }
    class ReconnectInit extends TransportState {
        constructor();
    }
    class Reconnecting extends TransportState {
        constructor();
    }
    class Reconnected extends TransportState {
        constructor();
    }
    class StoppedReconnectionAttempts extends TransportState {
        constructor();
    }
}
