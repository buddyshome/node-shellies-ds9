import {characteristic, Component} from './base';
import { Device } from '../devices';

export interface BluetoothLowEnergyBlutrvAssocAttributes {
  duration: number;
  started_at: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BluetoothLowEnergyAttributes {
  blutrv_assoc?: BluetoothLowEnergyBlutrvAssocAttributes;
}

export interface BluetoothLowEnergyRpcConfig {
  enable: boolean;
}

export interface BluetoothLowEnergyConfig {
  enable: boolean;
  rpc: BluetoothLowEnergyRpcConfig;
}

/**
 * Handles the Bluetooth services of a device.
 */
export class BluetoothLowEnergy extends Component<
  BluetoothLowEnergyAttributes, BluetoothLowEnergyConfig> implements BluetoothLowEnergyAttributes {
    /**
     * BluTrvAssociations information, present only when associations are active.
     */
    @characteristic
  readonly blutrv_assoc?: BluetoothLowEnergyBlutrvAssocAttributes;

    constructor(device: Device) {
      super('BLE', device);
    }
}
