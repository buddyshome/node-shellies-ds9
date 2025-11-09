import { Device } from "./base";
import { BluetoothLowEnergy, Cloud, Mqtt, OutboundWebSocket, Script, Switch, WiFi } from "../components";
export declare class ShellyPlusPlugUs extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly switch0: Switch;
    readonly script: Script;
}
export declare class ShellyPlusPlugEu extends ShellyPlusPlugUs {
    static readonly model: string;
    static readonly modelName: string;
}
export declare class ShellyPlusPlugUk extends ShellyPlusPlugUs {
    static readonly model: string;
    static readonly modelName: string;
}
export declare class ShellyPlusPlugIt extends ShellyPlusPlugUs {
    static readonly model: string;
    static readonly modelName: string;
}
export declare class ShellyPlugSG3Eu extends ShellyPlusPlugUs {
    static readonly model: string;
    static readonly modelName: string;
}
//# sourceMappingURL=shelly-plus-plug.d.ts.map