"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cover = void 0;
const base_1 = require("./base");
/**
 * Handles the operation of moorized garage doors, window blinds, roof skylights etc.
 */
class Cover extends base_1.ComponentWithId {
    /**
     * Source of the last command.
     */
    source = '';
    /**
     * The current state.
     */
    state = 'stopped';
    /**
     * The current (last measured) instantaneous power delivered to the attached
     * load.
     */
    apower = 0;
    /**
     * Last measured voltage (in Volts).
     */
    voltage = 0;
    /**
     * Last measured current (in Amperes).
     */
    current = 0;
    /**
     * Last measured power factor.
     */
    pf = 0;
    /**
     * Information about the energy counter.
     */
    aenergy = {
        total: 0,
        by_minute: [],
        minute_ts: 0,
    };
    /**
     * The current position in percent, from `0` (fully closed) to `100` (fully open); or `null` if not calibrated.
     */
    current_pos = null;
    /**
     * The requested target position in percent, from `0` (fully closed) to `100` (fully open); or `null` if not calibrated
     * or not actively moving.
     */
    target_pos = null;
    /**
     * A timeout (in seconds) after which the cover will automatically stop moving; or `undefined` if not actively moving.
     */
    move_timeout;
    /**
     * The time at which the movement began; or `undefined` if not actively moving.
     */
    move_started_at;
    /**
     * Whether the cover has been calibrated.
     */
    pos_control = false;
    /**
     * Information about the temperature sensor (if applicable).
     */
    temperature;
    /**
     * Any error conditions that have occurred.
     */
    errors;
    constructor(device, id = 0) {
        super('Cover', device, id);
    }
    /**
     * Opens the cover.
     * @param duration - Move in open direction for the specified time (in seconds).
     */
    open(duration) {
        return this.rpc('Open', {
            id: this.id,
            duration,
        });
    }
    /**
     * Closes the cover.
     * @param duration - Move in close direction for the specified time (in seconds).
     */
    close(duration) {
        return this.rpc('Close', {
            id: this.id,
            duration,
        });
    }
    /**
     * Stops any ongoing movement.
     */
    stop() {
        return this.rpc('Stop', {
            id: this.id,
        });
    }
    /**
     * Moves the cover to the given position.
     * One, but not both, of `pos` and `rel` must be specified.
     * @param pos - An absolute position (in percent).
     * @param rel - A relative position (in percent).
     */
    goToPosition(pos, rel) {
        return this.rpc('GoToPosition', {
            id: this.id,
            pos,
            rel,
        });
    }
    /**
     * Starts the calibration procedure.
     */
    calibrate() {
        return this.rpc('Calibrate', {
            id: this.id,
        });
    }
}
__decorate([
    base_1.characteristic
], Cover.prototype, "source", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "state", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "apower", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "voltage", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "current", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "pf", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "aenergy", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "current_pos", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "target_pos", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "move_timeout", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "move_started_at", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "pos_control", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "temperature", void 0);
__decorate([
    base_1.characteristic
], Cover.prototype, "errors", void 0);
exports.Cover = Cover;
//# sourceMappingURL=cover.js.map