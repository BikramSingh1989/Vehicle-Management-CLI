// src/classes/Cli.ts
import Vehicle from './Vehicle';  // Ensure Vehicle is correctly imported

class Cli {
  // Implementing the VIN generation method
  static generateVin(): string {
    // Generate a random VIN-like string (simplified for the example)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let vin = '';
    for (let i = 0; i < 17; i++) {  // VINs are 17 characters long
      vin += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return vin;
  }

  private vehicles: Vehicle[] = [];  // Store vehicles in an instance property

  // Constructor accepts the vehicles array as an argument
  constructor(vehicles: Vehicle[]) {
    this.vehicles = vehicles;  // Initialize vehicles from the argument
  }

  // Method to display all vehicles
  showVehicles(): void {
    if (this.vehicles.length === 0) {
      console.log('No vehicles found.');
      return;
    }
    
    console.log('Current vehicles in the system:');
    this.vehicles.forEach(vehicle => {
      console.log(vehicle.getDetails());  // Assuming getDetails() exists on Vehicle
    });
  }

  // Method to start the CLI
  startCli(): void {
    this.showVehicles();  // Call showVehicles to display vehicles when the CLI starts
  }
}

export default Cli;
