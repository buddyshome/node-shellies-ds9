import {component, Device, MultiProfileDevice} from '../base';
import {
  BluetoothLowEnergy,
  Cct,
  Cloud,
  Input,
  Mqtt,
  OutboundWebSocket,
  Rgb,
  Script,
  Light,
  WiFi,
  Ethernet,
} from '../../components';

export class ShellyProRGBWPm extends MultiProfileDevice {
  static readonly model: string = 'SPDC-0D5PE16EU';
  static readonly modelName: string = 'Shelly Pro RGBWW PM';

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
  readonly input2 = new Input(this, 2);

  @component
  readonly input3 = new Input(this, 3);

  @component
  readonly input4 = new Input(this, 4);

  @component
  readonly light0 = new Light(this, 0);

  @component
  readonly light1 = new Light(this, 1);

  @component
  readonly light2 = new Light(this, 2);

  @component
  readonly light3 = new Light(this, 3);

  @component
  readonly light4 = new Light(this, 4);

  @component
  readonly rgb0 = new Rgb(this, 0);

  @component
  readonly cct0 = new Cct(this, 0);

  @component
  readonly cct1 = new Cct(this, 1);

  @component
  readonly script = new Script(this);
}

Device.registerClass(ShellyProRGBWPm);
