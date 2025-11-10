"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyPlusPmMini = void 0;
const base_1 = require("../base");
const components_1 = require("../../components");
class ShellyPlusPmMini extends base_1.Device {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.pm1 = new components_1.Pm1(this);
        this.script = new components_1.Script(this);
    }
}
ShellyPlusPmMini.model = 'SNPM-001PCEU16';
ShellyPlusPmMini.modelName = 'Shelly Plus PM Mini';
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "pm1", void 0);
__decorate([
    base_1.component
], ShellyPlusPmMini.prototype, "script", void 0);
exports.ShellyPlusPmMini = ShellyPlusPmMini;
base_1.Device.registerClass(ShellyPlusPmMini);
//# sourceMappingURL=shelly-plus-pm-mini.js.map