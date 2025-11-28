import { ComponentWithId } from './base';
import { Device } from '../devices';
export interface Pm1AenergyStatus {
    total: number;
    by_minute?: number[];
    minute_ts: number;
}
export interface Pm1Attributes {
    id: number;
    output: boolean;
    voltage?: number;
    current?: number;
    apower?: number;
    aprtpower?: number;
    pf?: number;
    freq?: number;
    aenergy?: Pm1AenergyStatus;
    ret_aenergy?: Pm1AenergyStatus;
    errors?: string[];
}
export interface Pm1Config {
    id: number;
    name: string | null;
}
/**
 * Handles the monitoring of a device's temperature sensor.
 */
export declare class Pm1 extends ComponentWithId<Pm1Attributes, Pm1Config> implements Pm1Attributes {
    /**
    * true if the output channel is currently on, false otherwise.
    */
    readonly output: boolean;
    /**
     * Last measured voltage in Volts
     */
    readonly voltage: number | undefined;
    /**
     * Last measured current in Amperes
     */
    readonly current: number | undefined;
    /**
    * Last measured instantaneous active power (in Watts) delivered to the attached load
    */
    readonly apower: number | undefined;
    /**
    * Last measured instantaneous apparent power (in Volt-Amperes) delivered to the attached load (shown if applicable)
    */
    readonly aprtpower: number | undefined;
    /**
    * Last measured power factor (shown if applicable)
    */
    readonly pf: number | undefined;
    /**
    * Last measured network frequency (shown if applicable)
    */
    readonly freq: number | undefined;
    /**
    * Information about the active energy counter
    */
    readonly aenergy: Pm1AenergyStatus | undefined;
    /**
     * Information about the returned active energy counter
     */
    readonly ret_aenergy: Pm1AenergyStatus | undefined;
    /**
     * Any error conditions that have occurred.
     */
    readonly errors: string[] | undefined;
    constructor(device: Device, id?: number);
}
//# sourceMappingURL=pm1.d.ts.map