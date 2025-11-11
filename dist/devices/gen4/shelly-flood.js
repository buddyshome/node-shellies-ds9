"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellyFloodGen4 = void 0;
const base_1 = require("../base");
const components_1 = require("../../components");
class ShellyFloodGen4 extends base_1.Device {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.flood0 = new components_1.Flood(this, 0);
        this.devicePower0 = new components_1.DevicePower(this, 0);
        this.script = new components_1.Script(this);
    }
}
ShellyFloodGen4.model = 'S4SN-0071A';
ShellyFloodGen4.modelName = 'Shelly Flood Gen4';
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "wifi", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "cloud", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "flood0", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "devicePower0", void 0);
__decorate([
    base_1.component
], ShellyFloodGen4.prototype, "script", void 0);
exports.ShellyFloodGen4 = ShellyFloodGen4;
base_1.Device.registerClass(ShellyFloodGen4);
//# sourceMappingURL=shelly-flood.js.map