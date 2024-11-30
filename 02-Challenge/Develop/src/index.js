"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var Wheel_1 = require("./classes/Wheel");
var Truck_1 = require("./classes/Truck");
var Car_1 = require("./classes/Car");
var Motorbike_1 = require("./classes/Motorbike");
var Cli_1 = require("./classes/Cli");
// Create an array of vehicles
var vehicles = [];
// Creating truck object with wheels
var truck1 = new Truck_1.default(Cli_1.default.generateVin(), "red", "Ford", "F-150", 2021, 5000, 120, [
    new Wheel_1.Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel_1.Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel_1.Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel_1.Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi")
], 15000 // Towing capacity
);
// Creating car object
var car1 = new Car_1.default(Cli_1.default.generateVin(), 'blue', 'Toyota', 'Camry', 2021, 3000, 130);
// Creating motorbike object with wheels
var motorbike1 = new Motorbike_1.default(Cli_1.default.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, "V-twin", // Engine type
[
    new Wheel_1.Wheel(17, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel_1.Wheel(17, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi")
]);
// Push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);
// Create a new instance of the Cli class and pass the vehicles array
var cliInstance = new Cli_1.default(vehicles); // Pass vehicles as a parameter to the constructor
// Start the CLI
cliInstance.startCli(); // Call startCli to begin the process
