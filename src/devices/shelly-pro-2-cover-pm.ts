import { component, Device, MultiProfileDevice } from './base';
import {
    BluetoothLowEnergy,
    Cloud,
    Cover,
    Ethernet,
    Input,
    Mqtt,
    OutboundWebSocket,
    Script,
    Switch,
    Ui,
    WiFi,
} from '../components';

export class ShellyPro2CoverPm extends MultiProfileDevice {
    static readonly model: string = 'SPSH-002PE16EU';
    static readonly modelName: string = 'Shelly Pro 2 Cover PM';

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
    readonly cover0 = new Cover(this, 0);

    @component
    readonly cover1 = new Cover(this, 1);

    @component
    readonly switch0 = new Switch(this, 0);

    @component
    readonly switch1 = new Switch(this, 1);

    @component
    readonly switch2 = new Switch(this, 2);

    @component
    readonly switch3 = new Switch(this, 3);

    @component
    readonly script = new Script(this);

    @component
    readonly ui = new Ui(this);
}

Device.registerClass(ShellyPro2CoverPm);
