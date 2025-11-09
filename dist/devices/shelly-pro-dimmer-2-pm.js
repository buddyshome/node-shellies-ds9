"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyProDimmer2Pm = void 0;
const base_1 = require("./base");
const components_1 = require("../components");
class ShellyProDimmer2Pm extends base_1.Device {
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
        this.light0 = new components_1.Light(this, 0);
        this.light1 = new components_1.Light(this, 1);
        this.script = new components_1.Script(this);
        this.ui = new components_1.Ui(this);
    }
}
ShellyProDimmer2Pm.model = 'SPDM-002PE01EU';
ShellyProDimmer2Pm.modelName = 'Shelly Pro Dimmer 2PM';
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "ethernet", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "input0", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "input1", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "input2", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "input3", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "light0", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "light1", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "script", void 0);
__decorate([
    base_1.component
], ShellyProDimmer2Pm.prototype, "ui", void 0);
exports.ShellyProDimmer2Pm = ShellyProDimmer2Pm;
base_1.Device.registerClass(ShellyProDimmer2Pm);
//# sourceMappingURL=shelly-pro-dimmer-2-pm.js.map