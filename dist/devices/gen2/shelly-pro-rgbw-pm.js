"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyProRGBWPm = void 0;
const base_1 = require("../base");
const components_1 = require("../../components");
class ShellyProRGBWPm extends base_1.MultiProfileDevice {
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
        this.input4 = new components_1.Input(this, 4);
        this.light0 = new components_1.Light(this, 0);
        this.light1 = new components_1.Light(this, 1);
        this.light2 = new components_1.Light(this, 2);
        this.light3 = new components_1.Light(this, 3);
        this.light4 = new components_1.Light(this, 4);
        this.rgb0 = new components_1.Rgb(this, 0);
        this.cct0 = new components_1.Cct(this, 0);
        this.cct1 = new components_1.Cct(this, 1);
        this.script = new components_1.Script(this);
    }
}
ShellyProRGBWPm.model = 'SPDC-0D5PE16EU';
ShellyProRGBWPm.modelName = 'Shelly Pro RGBWW PM';
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "ethernet", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "input0", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "input1", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "input2", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "input3", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "input4", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "light0", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "light1", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "light2", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "light3", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "light4", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "rgb0", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "cct0", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "cct1", void 0);
__decorate([
    base_1.component
], ShellyProRGBWPm.prototype, "script", void 0);
exports.ShellyProRGBWPm = ShellyProRGBWPm;
base_1.Device.registerClass(ShellyProRGBWPm);
//# sourceMappingURL=shelly-pro-rgbw-pm.js.map