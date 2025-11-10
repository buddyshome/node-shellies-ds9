"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shelly2PmGen4 = void 0;
const base_1 = require("../base");
const components_1 = require("../../components");
class Shelly2PmGen4 extends base_1.MultiProfileDevice {
    constructor() {
        super(...arguments);
        this.wifi = new components_1.WiFi(this);
        this.bluetoothLowEnergy = new components_1.BluetoothLowEnergy(this);
        this.cloud = new components_1.Cloud(this);
        this.mqtt = new components_1.Mqtt(this);
        this.outboundWebSocket = new components_1.OutboundWebSocket(this);
        this.cover0 = new components_1.Cover(this, 0);
        this.input0 = new components_1.Input(this, 0);
        this.input1 = new components_1.Input(this, 1);
        this.switch0 = new components_1.Switch(this, 0);
        this.switch1 = new components_1.Switch(this, 1);
        this.script = new components_1.Script(this);
    }
}
Shelly2PmGen4.model = 'S4SW-002P16EU';
Shelly2PmGen4.modelName = 'Shelly 2 PM Gen4';
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "wifi", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "bluetoothLowEnergy", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "cloud", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "mqtt", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "outboundWebSocket", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "cover0", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "input0", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "input1", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "switch0", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "switch1", void 0);
__decorate([
    base_1.component
], Shelly2PmGen4.prototype, "script", void 0);
exports.Shelly2PmGen4 = Shelly2PmGen4;
base_1.Device.registerClass(Shelly2PmGen4);
//# sourceMappingURL=shelly-2-pm.js.map