import { characteristic, ComponentWithId } from './base';
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
export class Rgbw extends ComponentWithId<RgbwAttributes, RgbwConfig> implements RgbwAttributes {
  /**
   * Source of the last command.
   */
  @characteristic
  readonly source: string = '';

  /**
   * true if the output channel is currently on, false otherwise.
   */
  @characteristic
  readonly output: boolean = false;

  /**
   * Current Red, Green, Blue [r,g,b] level 0..255
   */
  @characteristic
  readonly rgb: number[] = [0, 0, 0];

  /**
   * Current brightness level, in percent.
   */
  @characteristic
  readonly brightness: number = 0;

  /**
   * Current white level 0..255.
   */
  @characteristic
  readonly white: number = 0;

  /**
   * Start time of the timer (as a UNIX timestamp, in UTC).
   */
  @characteristic
  readonly timer_started_at: number | undefined;

  /**
   * Duration of the timer, in seconds.
   */
  @characteristic
  readonly timer_duration: number | undefined;

  constructor(device: Device, id = 0) {
    super('Rgbw', device, id);
  }

  /**
   * Toggles the output state.
   */
  toggle(): PromiseLike<null> {
    return this.rpc<null>('Toggle', {
      id: this.id,
    });
  }

  /**
   * Sets the output and brightness level of the light.
   * At least one of `on` and `brightness` must be specified.
   * @param on - Whether to switch on or off.
   * @param brightness - Brightness level.
   * @param rgb - Red, Green, Blue [r,g,b] - each value represents level between 0..255.
   * @param white - White level 0..255
   * @param toggle_after - Flip-back timer, in seconds.
   */
  set(on?: boolean, brightness?: number, rgb?: number[], white?: number, toggle_after?: number): PromiseLike<null> {
    return this.rpc<null>('Set', {
      id: this.id,
      on,
      brightness,
      rgb,
      white,
      toggle_after,
    });
  }
}
