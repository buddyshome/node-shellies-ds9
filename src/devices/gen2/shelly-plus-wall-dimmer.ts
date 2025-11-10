import { component, Device } from '../base';
import {
  BluetoothLowEnergy,
  Cloud,
  Mqtt,
  OutboundWebSocket,
  Script,
  Light,
  Ui,
  WiFi,
} from '../../components';

export class ShellyPlusWallDimmer extends Device {
  static readonly model: string = 'SNDM-0013US';
  static readonly modelName: string = 'Shelly Plus Wall Dimmer';

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
  readonly light0 = new Light(this, 0);

  @component
  readonly script = new Script(this);

  @component
  readonly ui = new Ui(this);
}

Device.registerClass(ShellyPlusWallDimmer);
