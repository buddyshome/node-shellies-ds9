import { Component } from './base';
import { Device } from '../devices';
export interface BluetoothLowEnergyBlutrvAssocAttributes {
    duration: number;
    started_at: number;
}
export interface BluetoothLowEnergyAttributes {
    blutrv_assoc?: BluetoothLowEnergyBlutrvAssocAttributes;
}
export interface BluetoothLowEnergyRpcConfig {
    enable: boolean;
}
export interface BluetoothLowEnergyConfig {
    enable: boolean;
    rpc: BluetoothLowEnergyRpcConfig;
}
/**
 * Handles the Bluetooth services of a device.
 */
export declare class BluetoothLowEnergy extends Component<BluetoothLowEnergyAttributes, BluetoothLowEnergyConfig> implements BluetoothLowEnergyAttributes {
    /**
     * BluTrvAssociations information, present only when associations are active.
     */
    readonly blutrv_assoc?: BluetoothLowEnergyBlutrvAssocAttributes;
    constructor(device: Device);
}
//# sourceMappingURL=bluetooth-low-energy.d.ts.map