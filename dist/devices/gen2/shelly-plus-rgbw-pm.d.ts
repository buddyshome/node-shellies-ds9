import { MultiProfileDevice } from '../base';
import { BluetoothLowEnergy, Cloud, Input, Mqtt, OutboundWebSocket, Rgb, Rgbw, Script, Light, WiFi } from '../../components';
export declare class ShellyPlusRGBWPm extends MultiProfileDevice {
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
    readonly light0: Light;
    readonly light1: Light;
    readonly light2: Light;
    readonly light3: Light;
    readonly rgb0: Rgb;
    readonly rgbw0: Rgbw;
    readonly script: Script;
}
//# sourceMappingURL=shelly-plus-rgbw-pm.d.ts.map