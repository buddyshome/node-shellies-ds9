import { component, Device } from '../base';
import {
  BluetoothLowEnergy,
  Cloud,
  Input,
  Mqtt,
  OutboundWebSocket,
  Script,
  Light,
  WiFi,
} from '../../components';

export class ShellyDimmerPmGen3 extends Device {
  static readonly model: string = 'S3DM-0010WW';
  static readonly modelName: string = 'Shelly Dimmer 0/1-10V PM Gen3';

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
  readonly input0 = new Input(this, 0);

  @component
  readonly input1 = new Input(this, 1);

  @component
  readonly light0 = new Light(this, 0);

  @component
  readonly script = new Script(this);
}

Device.registerClass(ShellyDimmerPmGen3);
