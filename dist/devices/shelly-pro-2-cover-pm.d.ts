import { MultiProfileDevice } from './base';
import { BluetoothLowEnergy, Cloud, Cover, Ethernet, Input, Mqtt, OutboundWebSocket, Script, Switch, Ui, WiFi } from '../components';
export declare class ShellyPro2CoverPm extends MultiProfileDevice {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly ethernet: Ethernet;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly input0: Input;
    readonly input1: Input;
    readonly input2: Input;
    readonly input3: Input;
    readonly cover0: Cover;
    readonly cover1: Cover;
    readonly switch0: Switch;
    readonly switch1: Switch;
    readonly switch2: Switch;
    readonly switch3: Switch;
    readonly script: Script;
    readonly ui: Ui;
}
//# sourceMappingURL=shelly-pro-2-cover-pm.d.ts.map