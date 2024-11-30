// src/index.ts
import { Wheel } from './classes/Wheel';
import Vehicle from './classes/Vehicle';
import Truck from './classes/Truck';
import Car from './classes/Car';
import Motorbike from './classes/Motorbike';
import Cli from './classes/Cli';

// Create an array of vehicles
const vehicles: Vehicle[] = [];

// Creating truck object with wheels
const truck1 = new Truck(
  Cli.generateVin(),
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [
    new Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel(18, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi")
  ],
  15000  // Towing capacity
);

// Creating car object
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130
);

// Creating motorbike object with wheels
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  "V-twin",  // Engine type
  [
    new Wheel(17, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi"),
    new Wheel(17, "Michelin", "BrandX", "Alloy", "Summer", 32, "psi")
  ]
);

// Push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create a new instance of the Cli class and pass the vehicles array
const cliInstance = new Cli(vehicles);  // Pass vehicles as a parameter to the constructor

// Start the CLI
cliInstance.startCli();  // Call startCli to begin the process
