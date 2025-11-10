import { component, Device } from '../base';
import {
  BluetoothLowEnergy,
  Cloud,
  Ethernet,
  Input,
  Mqtt,
  OutboundWebSocket,
  Script,
  Light,
  WiFi,
} from '../../components';

export class ShellyProDimmer extends Device {
  static readonly model: string = 'SPCC-001PE10EU';
  static readonly modelName: string = 'Shelly Pro Dimmer 0/1-10V PM';

  @component
  readonly wifi = new WiFi(this);

  @component
  readonly ethernet = new Ethernet(this);

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

Device.registerClass(ShellyProDimmer);
