import { ComponentWithId } from './base';
import { Device } from '../devices';
export interface DevicePowerBatteryStatus {
    V: number | null;
    percent: number | null;
}
export interface DevicePowerExternalSource {
    present: boolean;
}
export interface DevicePowerAttributes {
    id: number;
    battery: DevicePowerBatteryStatus;
    external?: DevicePowerExternalSource;
    errors?: string[];
}
export interface DevicePowerConfig {
}
/**
 * Handles the monitoring of a device's battery charge.
 */
export declare class DevicePower extends ComponentWithId<DevicePowerAttributes, DevicePowerConfig> implements DevicePowerAttributes {
    /**
     * Information about the battery charge.
     */
    readonly battery: DevicePowerBatteryStatus;
    /**
     * Information about the external power source (only available if external power source is supported).
     */
    readonly external: DevicePowerExternalSource | undefined;
    /**
     * Whether external power source is connected.
     */
    readonly errors: string[] | undefined;
    constructor(device: Device, id?: number);
}
//# sourceMappingURL=device-power.d.ts.map