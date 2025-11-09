"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyGen4Mini = void 0;
const base_1 = require("./base");
const components_1 = require("../components");
class ShellyGen4Mini extends base_1.MultiProfileDevice {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.input = new components_1.Input(this, 0);
        this.switch = new components_1.Switch(this, 0);
        this.script = new components_1.Script(this);
    }
}
ShellyGen4Mini.model = "S4SW-001P8EU";
ShellyGen4Mini.modelName = "Shelly 1PM Gen4 Mini";
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "input", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "switch", void 0);
__decorate([
    base_1.component
], ShellyGen4Mini.prototype, "script", void 0);
exports.ShellyGen4Mini = ShellyGen4Mini;
base_1.Device.registerClass(ShellyGen4Mini);
//# sourceMappingURL=shelly-gen4-1-pm.js.map