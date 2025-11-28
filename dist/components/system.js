"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
const base_1 = require("./base");
/**
 * Handles the system services of a device.
 */
class System extends base_1.Component {
    /**
     * MAC address of the device.
     */
    mac = '';
    /**
     * true if a restart is required, false otherwise.
     */
    restart_required = false;
    /**
     * Local time in the current timezone (HH:MM).
     */
    time = '';
    /**
     * Current time in UTC as a UNIX timestamp.
     */
    unixtime = 0;
    /**
     * Time in seconds since last reboot.
     */
    uptime = 0;
    /**
     * Total RAM, in bytes.
     */
    ram_size = 0;
    /**
     * Available RAM, in bytes.
     */
    ram_free = 0;
    /**
     * File system total size, in bytes.
     */
    fs_size = 0;
    /**
     * File system available size, in bytes.
     */
    fs_free = 0;
    /**
     * Configuration revision number.
     */
    cfg_rev = 0;
    /**
     * KVS (Key-Value Store) revision number.
     */
    kvs_rev = 0;
    /**
     * Schedule revision number (present if schedules are enabled).
     */
    schedule_rev;
    /**
     * Webhook revision number (present if schedules are enabled).
     */
    webhook_rev;
    /**
     * Available firmware updates, if any.
     */
    available_updates = {};
    /**
     * Information about boot type and cause (only for battery-operated devices).
     */
    wakeup_reason;
    constructor(device) {
        super('Sys', device);
    }
    handleEvent(event) {
        switch (event.event) {
            case 'ota_begin':
                this.emit('otaBegin', event.msg);
                break;
            case 'ota_progress':
                this.emit('otaProgress', event.progress_percent, event.msg);
                break;
            case 'ota_success':
                this.emit('otaSuccess', event.msg);
                break;
            case 'ota_error':
                this.emit('otaError', event.msg);
                break;
            case 'sleep':
                this.emit('sleep');
                break;
            default:
                super.handleEvent(event);
        }
    }
}
__decorate([
    base_1.characteristic
], System.prototype, "mac", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "restart_required", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "time", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "unixtime", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "uptime", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "ram_size", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "ram_free", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "fs_size", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "fs_free", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "cfg_rev", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "kvs_rev", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "schedule_rev", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "webhook_rev", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "available_updates", void 0);
__decorate([
    base_1.characteristic
], System.prototype, "wakeup_reason", void 0);
exports.System = System;
//# sourceMappingURL=system.js.map