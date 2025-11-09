import { MultiProfileDevice } from './base';
import { BluetoothLowEnergy, Cloud, Cover, Input, Mqtt, OutboundWebSocket, Script, WiFi } from '../components';
export declare class ShellyProDualCoverPm extends MultiProfileDevice {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly cover0: Cover;
    readonly cover1: Cover;
    readonly input0: Input;
    readonly input1: Input;
    readonly input2: Input;
    readonly input3: Input;
    readonly script: Script;
}
//# sourceMappingURL=shelly-pro-dual-cover-pm.d.ts.map