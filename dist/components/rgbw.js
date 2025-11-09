"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rgbw = void 0;
const base_1 = require("./base");
/**
 * Handles a dimmable light output with additional on/off control.
 */
class Rgbw extends base_1.ComponentWithId {
    constructor(device, id = 0) {
        super('Rgbw', device, id);
        /**
         * Source of the last command.
         */
        this.source = '';
        /**
         * true if the output channel is currently on, false otherwise.
         */
        this.output = false;
        /**
         * Current Red, Green, Blue [r,g,b] level 0..255
         */
        this.rgb = [0, 0, 0];
        /**
         * Current brightness level, in percent.
         */
        this.brightness = 0;
        /**
         * Current white level 0..255.
         */
        this.white = 0;
    }
    /**
     * Toggles the output state.
     */
    toggle() {
        return this.rpc('Toggle', {
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
    set(on, brightness, rgb, white, toggle_after) {
        return this.rpc('Set', {
            id: this.id,
            on,
            brightness,
            rgb,
            white,
            toggle_after,
        });
    }
}
__decorate([
    base_1.characteristic
], Rgbw.prototype, "source", void 0);
__decorate([
    base_1.characteristic
], Rgbw.prototype, "output", void 0);
__decorate([
    base_1.characteristic
], Rgbw.prototype, "rgb", void 0);
__decorate([
    base_1.characteristic
], Rgbw.prototype, "brightness", void 0);
__decorate([
    base_1.characteristic
], Rgbw.prototype, "white", void 0);
__decorate([
    base_1.characteristic
], Rgbw.prototype, "timer_started_at", void 0);
__decorate([
    base_1.characteristic
], Rgbw.prototype, "timer_duration", void 0);
exports.Rgbw = Rgbw;
//# sourceMappingURL=rgbw.js.map