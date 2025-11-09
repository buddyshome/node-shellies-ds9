"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPro2CoverPm = void 0;
const base_1 = require("./base");
const components_1 = require("../components");
class ShellyPro2CoverPm extends base_1.MultiProfileDevice {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.ethernet = new components_1.Ethernet(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.input0 = new components_1.Input(this, 0);
        this.input1 = new components_1.Input(this, 1);
        this.input2 = new components_1.Input(this, 2);
        this.input3 = new components_1.Input(this, 3);
        this.cover0 = new components_1.Cover(this, 0);
        this.cover1 = new components_1.Cover(this, 1);
        this.switch0 = new components_1.Switch(this, 0);
        this.switch1 = new components_1.Switch(this, 1);
        this.switch2 = new components_1.Switch(this, 2);
        this.switch3 = new components_1.Switch(this, 3);
        this.script = new components_1.Script(this);
        this.ui = new components_1.Ui(this);
    }
}
ShellyPro2CoverPm.model = 'SPSH-002PE16EU';
ShellyPro2CoverPm.modelName = 'Shelly Pro 2 Cover PM';
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "ethernet", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "input0", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "input1", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "input2", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "input3", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "cover0", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "cover1", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "switch0", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "switch1", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "switch2", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "switch3", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "script", void 0);
__decorate([
    base_1.component
], ShellyPro2CoverPm.prototype, "ui", void 0);
exports.ShellyPro2CoverPm = ShellyPro2CoverPm;
base_1.Device.registerClass(ShellyPro2CoverPm);
//# sourceMappingURL=shelly-pro-2-cover-pm.js.map