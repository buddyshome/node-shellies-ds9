import { MultiProfileDevice } from '../base';
import { BluetoothLowEnergy, Cct, Cloud, Input, Mqtt, OutboundWebSocket, Rgb, Script, Light, WiFi, Ethernet } from '../../components';
export declare class ShellyProRGBWPm extends MultiProfileDevice {
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
    readonly input2: Input;
    readonly input3: Input;
    readonly input4: Input;
    readonly light0: Light;
    readonly light1: Light;
    readonly light2: Light;
    readonly light3: Light;
    readonly light4: Light;
    readonly rgb0: Rgb;
    readonly cct0: Cct;
    readonly cct1: Cct;
    readonly script: Script;
}
//# sourceMappingURL=shelly-pro-rgbw-pm.d.ts.map