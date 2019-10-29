/**
 * Quality indicator enum.
 * Defines media flow quality values.
 */
export enum RpcTransportState {

  DISCONNECTED,
  RECONNECT_INIT,
  RECONNECTING,
  RECONNECTED,
  STOPED_RECONNECTION_ATTEMPTS,
  ERROR
}