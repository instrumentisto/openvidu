export class RpcTransportState {

  public readonly name: string;

  protected constructor(name: string) {
    this.name = name;
  }
}

export namespace RpcTransportState {
  export class Disconnected extends RpcTransportState {
    public readonly code: number;
    public readonly reason: string;

    constructor(code: number, reason: string) {
      super("Disconnected");
      this.code = code;
      this.reason = reason
    }
  }

  export class Error extends RpcTransportState {
    public readonly error: string;

    constructor(error: string) {
      super("Error");
      this.error = error;
    }
  }

  export class ReconnectInit extends RpcTransportState {
    constructor() {
      super("ReconnectInit");
    }
  }

  export class Reconnecting extends RpcTransportState {
    constructor() {
      super("Reconnecting");
    }
  }

  export class Reconnected extends RpcTransportState {
    constructor() {
      super("Reconnected");
    }
  }

  export class StoppedReconnectionAttempts extends RpcTransportState {
    constructor() {
      super("StoppedReconnectionAttempts");
    }
  }

}