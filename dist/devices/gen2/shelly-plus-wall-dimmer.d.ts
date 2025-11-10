import { Device } from '../base';
import { BluetoothLowEnergy, Cloud, Mqtt, OutboundWebSocket, Script, Light, Ui, WiFi } from '../../components';
export declare class ShellyPlusWallDimmer extends Device {
    static readonly model: string;
    static readonly modelName: string;
    readonly wifi: WiFi;
    readonly bluetoothLowEnergy: BluetoothLowEnergy;
    readonly cloud: Cloud;
    readonly mqtt: Mqtt;
    readonly outboundWebSocket: OutboundWebSocket;
    readonly light0: Light;
    readonly script: Script;
    readonly ui: Ui;
}
//# sourceMappingURL=shelly-plus-wall-dimmer.d.ts.map