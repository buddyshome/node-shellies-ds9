import { MultiProfileDevice } from '../base';
import { BluetoothLowEnergy, Cloud, Input, Mqtt, OutboundWebSocket, Script, Switch, WiFi } from '../../components';
export declare class ShellyPlusUni extends MultiProfileDevice {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly input0: Input;
    readonly input1: Input;
    readonly input2: Input;
    readonly switch0: Switch;
    readonly switch1: Switch;
    readonly script: Script;
}
//# sourceMappingURL=shelly-plus-uni.d.ts.map