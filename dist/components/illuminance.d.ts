import { ComponentWithId } from './base';
import { Device } from '../devices';
export interface IlluminanceAttributes {
    id: number;
    lux: number | null;
    illumination: string | null;
    errors?: string[];
}
export interface IlluminanceConfig {
    id: number;
    name: string | null;
    dark_thr: number;
    bright_thr: number;
}
/**
 * Handles the monitoring of a device's Illuminance sensor.
 */
export declare class Illuminance extends ComponentWithId<IlluminanceAttributes, IlluminanceConfig> implements IlluminanceAttributes {
    /**
     * Illuminance in lux (null if valid value could not be obtained) (if applicable).
     */
    readonly lux: number | null;
    /**
     * Illuminance level interpreted according to dark_thr/bright_thr (null if valid value could not be obtained):
     * lux below dark_thr is interpreted as dark, lux between dark_thr and bright_thr is interpreted as twilight,
     * lux above bright_thr is interpreted as bright.
     */
    readonly illumination: string | null;
    /**
     * Shown only if at least one error is present. May contain out_of_range, read when there is problem reading sensor.
     */
    readonly errors: string[] | undefined;
    constructor(device: Device, id?: number);
}
//# sourceMappingURL=illuminance.d.ts.map