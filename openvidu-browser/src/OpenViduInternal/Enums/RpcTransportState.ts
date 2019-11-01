export class RpcTransportState {
  protected constructor() {
  }
}

export namespace RpcTransportState {
  export class Disconnected extends RpcTransportState {
    public readonly code: number;
    public readonly reason: string;

    constructor(code: number, reason: string) {
      super();
      this.code = code;
      this.reason = reason
    }
  }

  export class Error extends RpcTransportState {
    public readonly error: string;

    constructor(error: string) {
      super();
      this.error = error;
    }
  }

  export class ReconnectInit extends RpcTransportState {
    constructor() {
      super();
    }
  }

  export class Reconnecting extends RpcTransportState {
    constructor() {
      super();
    }
  }

  export class Reconnected extends RpcTransportState {
    constructor() {
      super();
    }
  }

  export class StoppedReconnectionAttempts extends RpcTransportState {
    constructor() {
      super();
    }
  }

}