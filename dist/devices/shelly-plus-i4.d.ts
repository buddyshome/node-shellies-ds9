import { Device } from "./base";
import { BluetoothLowEnergy, Cloud, Input, Mqtt, OutboundWebSocket, Script, WiFi } from "../components";
export declare class ShellyPlusI4 extends Device {
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
    readonly input3: Input;
    readonly script: Script;
}
export declare class ShellyPlusI4V3 extends ShellyPlusI4 {
    static readonly model: string;
}
export declare class ShellyPlusI4Dc extends ShellyPlusI4 {
    static readonly model: string;
}
//# sourceMappingURL=shelly-plus-i4.d.ts.map