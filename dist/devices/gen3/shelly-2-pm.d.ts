import { MultiProfileDevice } from '../base';
import { BluetoothLowEnergy, Cloud, Cover, Input, Mqtt, OutboundWebSocket, Script, Switch, WiFi } from '../../components';
export declare class Shelly2PmGen3 extends MultiProfileDevice {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly cover0: Cover;
    readonly input0: Input;
    readonly input1: Input;
    readonly switch0: Switch;
    readonly switch1: Switch;
    readonly script: Script;
}
//# sourceMappingURL=shelly-2-pm.d.ts.map