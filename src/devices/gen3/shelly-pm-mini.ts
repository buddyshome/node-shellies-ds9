import { component, Device } from '../base';
import {
  BluetoothLowEnergy,
  Cloud,
  Mqtt,
  OutboundWebSocket,
  Script,
  WiFi,
  Pm1,
} from '../../components';

export class ShellyPmMiniGen3 extends Device {
  static readonly model: string = 'S3PM-001PCEU16';
  static readonly modelName: string = 'Shelly PM Mini Gen3';

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
  readonly pm1 = new Pm1(this);

  @component
  readonly script = new Script(this);
}

Device.registerClass(ShellyPmMiniGen3);
