"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cli = /** @class */ (function () {
    // Constructor accepts the vehicles array as an argument
    function Cli(vehicles) {
        this.vehicles = []; // Store vehicles in an instance property
        this.vehicles = vehicles; // Initialize vehicles from the argument
    }
    Cli.generateVin = function () {
        throw new Error('Method not implemented.');
    };
    // Method to display all vehicles
    Cli.prototype.showVehicles = function () {
        if (this.vehicles.length === 0) {
            console.log('No vehicles found.');
            return;
        }
        console.log('Current vehicles in the system:');
        this.vehicles.forEach(function (vehicle) {
            console.log(vehicle.getDetails()); // Assuming getDetails() exists on Vehicle
        });
    };
    // Method to start the CLI
    Cli.prototype.startCli = function () {
        this.showVehicles(); // Call showVehicles to display vehicles when the CLI starts
    };
    return Cli;
}());
exports.default = Cli;
