"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shelly1PmMiniGen3 = void 0;
const base_1 = require("../base");
const components_1 = require("../../components");
class Shelly1PmMiniGen3 extends base_1.Device {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.input0 = new components_1.Input(this, 0);
        this.switch0 = new components_1.Switch(this, 0);
        this.script = new components_1.Script(this);
    }
}
Shelly1PmMiniGen3.model = 'S3SW-001P8EU';
Shelly1PmMiniGen3.modelName = 'Shelly 1 PM Mini Gen3';
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "wifi", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "cloud", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "input0", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "switch0", void 0);
__decorate([
    base_1.component
], Shelly1PmMiniGen3.prototype, "script", void 0);
exports.Shelly1PmMiniGen3 = Shelly1PmMiniGen3;
base_1.Device.registerClass(Shelly1PmMiniGen3);
//# sourceMappingURL=shelly-1-pm-mini.js.map