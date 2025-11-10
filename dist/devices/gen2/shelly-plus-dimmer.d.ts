import { Device } from '../base';
import { BluetoothLowEnergy, Cloud, Input, Mqtt, OutboundWebSocket, Script, Light, Ui, WiFi } from '../../components';
export declare class ShellyPlusDimmer extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly input0: Input;
    readonly input1: Input;
    readonly light0: Light;
    readonly script: Script;
    readonly ui: Ui;
}
//# sourceMappingURL=shelly-plus-dimmer.d.ts.map