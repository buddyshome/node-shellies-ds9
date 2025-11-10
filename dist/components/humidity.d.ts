import { ComponentWithId } from './base';
import { Device } from '../devices';
export interface HumidityAttributes {
    id: number;
    rh: number | null;
    errors?: string[];
}
export interface HumidityConfig {
    id: number;
    name: string | null;
    report_thr: number;
    offset: number;
}
/**
 * Handles the monitoring of a device's humidity sensor.
 */
export declare class Humidity extends ComponentWithId<HumidityAttributes, HumidityConfig> implements HumidityAttributes {
    /**
     * Relative humidity in % (null if valid value could not be obtained).
     */
    readonly rh: number | null;
    /**
     * Shown only if at least one error is present. May contain out_of_range, read when there is problem reading sensor.
     */
    readonly errors: string[] | undefined;
    constructor(device: Device, id?: number);
}
//# sourceMappingURL=humidity.d.ts.map