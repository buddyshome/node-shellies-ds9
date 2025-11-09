import { ComponentWithId } from './base';
import { Device } from '../devices';
export interface RgbwAttributes {
    id: number;
    source: string;
    output: boolean;
    rgb: number[];
    brightness: number;
    white: number;
    timer_started_at?: number;
    timer_duration?: number;
}
export interface RgbwConfig {
    id: number;
    name: string | null;
    in_mode: 'follow' | 'flip' | 'activate' | 'detached' | 'dim';
    initial_state: 'off' | 'on' | 'restore_last';
    auto_on: boolean;
    auto_on_delay: number;
    auto_off: boolean;
    auto_off_delay: number;
    transition_duration: number;
    min_brightness_on_toggle: number;
    night_mode: {
        enable: boolean;
        brightness: number | null;
        rgb: number[] | null;
        white: number | null;
        active_between?: string[];
    };
}
/**
 * Handles a dimmable light output with additional on/off control.
 */
export declare class Rgbw extends ComponentWithId<RgbwAttributes, RgbwConfig> implements RgbwAttributes {
    /**
     * Source of the last command.
     */
    readonly source: string;
    /**
     * true if the output channel is currently on, false otherwise.
     */
    readonly output: boolean;
    /**
     * Current Red, Green, Blue [r,g,b] level 0..255
     */
    readonly rgb: number[];
    /**
     * Current brightness level, in percent.
     */
    readonly brightness: number;
    /**
     * Current white level 0..255.
     */
    readonly white: number;
    /**
     * Start time of the timer (as a UNIX timestamp, in UTC).
     */
    readonly timer_started_at: number | undefined;
    /**
     * Duration of the timer, in seconds.
     */
    readonly timer_duration: number | undefined;
    constructor(device: Device, id?: number);
    /**
     * Toggles the output state.
     */
    toggle(): PromiseLike<null>;
    /**
     * Sets the output and brightness level of the light.
     * At least one of `on` and `brightness` must be specified.
     * @param on - Whether to switch on or off.
     * @param brightness - Brightness level.
     * @param rgb - Red, Green, Blue [r,g,b] - each value represents level between 0..255.
     * @param white - White level 0..255
     * @param toggle_after - Flip-back timer, in seconds.
     */
    set(on?: boolean, brightness?: number, rgb?: number[], white?: number, toggle_after?: number): PromiseLike<null>;
}
//# sourceMappingURL=rgbw.d.ts.map