import { component, Device } from '../base';
import {
  BluetoothLowEnergy,
  Cloud,
  DevicePower,
  Flood,
  Mqtt,
  OutboundWebSocket,
  Script,
  WiFi,
} from '../../components';

export class ShellyFloodGen4 extends Device {
  static readonly model: string = 'S4SN-0071A';
  static readonly modelName: string = 'Shelly Flood Gen4';

  @component
  readonly wifi = new WiFi(this);

  @component
  readonly bluetoothLowEnergy = new BluetoothLowEnergy(this);

  @component
  readonly cloud = new Cloud(this);

  @component
  readonly mqtt = new Mqtt(this);

  @component
  readonly outboundWebSocket = new OutboundWebSocket(this);

  @component
  readonly flood0 = new Flood(this, 0);

  @component
  readonly devicePower0 = new DevicePower(this, 0);

  @component
  readonly script = new Script(this);
}

Device.registerClass(ShellyFloodGen4);
