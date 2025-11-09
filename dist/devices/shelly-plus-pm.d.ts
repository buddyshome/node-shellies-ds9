import { Device } from "./base";
import { BluetoothLowEnergy, Cloud, Mqtt, OutboundWebSocket, Script, WiFi, Pm1 } from "../components";
export declare class ShellyPlusPmMini extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly script: Script;
    readonly pm1: Pm1;
}
export declare class ShellyPlusPmMiniV3 extends ShellyPlusPmMini {
    static readonly model: string;
}
//# sourceMappingURL=shelly-plus-pm.d.ts.map