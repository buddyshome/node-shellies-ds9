import { Device } from "./base";
import { BluetoothLowEnergy, Cloud, Ethernet, Input, Mqtt, OutboundWebSocket, Script, Light, Ui, WiFi } from "../components";
export declare class ShellyProDimmer1Pm extends Device {
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
    readonly light0: Light;
    readonly script: Script;
    readonly ui: Ui;
}
export declare class ShellyProDimmer1Pm2 extends ShellyProDimmer1Pm {
    static readonly model: string;
    static readonly modelName: string;
}
export declare class ShellyDimmer extends ShellyProDimmer1Pm {
    static readonly model: string;
    static readonly modelName: string;
}
//# sourceMappingURL=shelly-pro-dimmer-1-pm.d.ts.map