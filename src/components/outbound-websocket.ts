import { characteristic, Component } from './base';
import { Device } from '../devices';

export interface OutboundWebSocketAttributes {
  connected: boolean;
}

export interface OutboundWebSocketConfig {
  enable: boolean;
  server: string;
  ssl_ca: '*' | 'user_ca.pem' | 'ca.pem' | null;
}

/**
 * Makes it possible to configure a device to establish and maintain an outbound WebSocket connection.
 */
export class OutboundWebSocket extends Component<
  OutboundWebSocketAttributes, OutboundWebSocketConfig> implements OutboundWebSocketAttributes {
  /**
   * True if device is connected to a websocket outbound connection or false otherwise.
   */
  @characteristic
  readonly connected: boolean = false;

  constructor(device: Device) {
    super('Ws', device);
  }
}
