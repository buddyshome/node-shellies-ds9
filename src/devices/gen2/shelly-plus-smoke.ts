import { component, Device } from '../base';
import {
  BluetoothLowEnergy,
  Cloud,
  DevicePower,
  Mqtt,
  OutboundWebSocket,
  Script,
  Smoke,
  WiFi,
} from '../../components';

export class ShellyPlusSmoke extends Device {
  static readonly model: string = 'SNSN-0031Z';
  static readonly modelName: string = 'Shelly Plus Smoke';

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
  readonly smoke0 = new Smoke(this, 0);

  @component
  readonly devicePower0 = new DevicePower(this, 0);

  @component
  readonly script = new Script(this);
}

Device.registerClass(ShellyPlusSmoke);
