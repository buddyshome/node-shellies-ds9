import { ComponentWithId } from './base';
import { Device } from '../devices';
export interface SmokeAttributes {
    id: number;
    alarm: boolean;
    mute: boolean;
}
export interface SmokeConfig {
    id: number;
    name: string | null;
}
/**
 * Handles the monitoring of a device's Smoke sensor.
 */
export declare class Smoke extends ComponentWithId<SmokeAttributes, SmokeConfig> implements SmokeAttributes {
    /**
     * Alarm state
     */
    readonly alarm: boolean;
    /**
     * Mute state
     */
    readonly mute: boolean;
    constructor(device: Device, id?: number);
}
//# sourceMappingURL=smoke.d.ts.map