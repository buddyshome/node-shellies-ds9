import { Device } from '../base';
import { BluetoothLowEnergy, Cloud, DevicePower, Flood, Mqtt, OutboundWebSocket, Script, WiFi } from '../../components';
export declare class ShellyFloodGen4 extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly flood0: Flood;
    readonly devicePower0: DevicePower;
    readonly script: Script;
}
//# sourceMappingURL=shelly-flood.d.ts.map