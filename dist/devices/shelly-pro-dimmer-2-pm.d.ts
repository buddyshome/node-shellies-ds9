import { Device } from './base';
import { BluetoothLowEnergy, Cloud, Ethernet, Input, Mqtt, OutboundWebSocket, Script, Light, Ui, WiFi } from '../components';
export declare class ShellyProDimmer2Pm extends Device {
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
    readonly light0: Light;
    readonly light1: Light;
    readonly script: Script;
    readonly ui: Ui;
}
//# sourceMappingURL=shelly-pro-dimmer-2-pm.d.ts.map