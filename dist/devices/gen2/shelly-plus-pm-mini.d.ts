import { Device } from '../base';
import { BluetoothLowEnergy, Cloud, Mqtt, OutboundWebSocket, Script, WiFi, Pm1 } from '../../components';
export declare class ShellyPlusPmMini extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly pm1: Pm1;
    readonly script: Script;
}
//# sourceMappingURL=shelly-plus-pm-mini.d.ts.map