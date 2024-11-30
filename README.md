Welcome to the Vehicle Management CLI
This project defines a set of classes for creating and managing various types of vehicles (Truck, Car, Motorbike) in a Command Line Interface (CLI). The program creates instances of different vehicles, adds them to a list, and provides an interface to interact with the vehicle data.

This project is 
- **Car.ts**: Defines the `Car` class.
- **Cli.ts**: Implements the command-line interface logic.
- **Motorbike.ts**: Defines the `Motorbike` class.
- **Truck.ts**: Defines the `Truck` class.
- **Wheel.ts**: Defines the `Wheel` class, used in vehicles that have wheels.
- **index.ts**: Main entry point that creates vehicle instances and starts the CLI.

## Classes Overview

- **Wheel**: Represents a wheel of a vehicle, with properties like size, brand, material, tire type, and pressure.
- **Vehicle**: A base class for all vehicles, with properties such as VIN (Vehicle Identification Number), color, manufacturer, model, and year.
- **Truck**: Extends the `Vehicle` class and adds specific properties like towing capacity.
- **Car**: Extends the `Vehicle` class and represents a standard car.
- **Motorbike**: Extends the `Vehicle` class and represents a motorbike. It has additional properties like engine type.
- **Cli**: Provides methods for starting and managing the CLI interface to interact with vehicles.

## Dependencies

This project requires the following dependencies:

- **TypeScript**: For type safety and enhanced development experience.
- **Node.js**: Required to run the TypeScript code.

## Setup

### 1. Install Dependencies

Make sure you have **Node.js** and **npm** installed.

Run the following commands to install the required dependencies:

```bash
npm install typescript --save-dev
npm install

### 2. Complile Typescript Code
bash

npx tsc

### 3. Run the code

node dist/index.js

How It Works
Vehicle Creation: The program creates instances of different vehicles (truck, car, motorbike) and populates them with relevant properties such as color, make, model, and other specific attributes like engine type for motorbikes and towing capacity for trucks.

CLI Interaction: A CLI interface is created using the Cli class, where the vehicles are listed and users can interact with them through the terminal.

Example Usage:

A Truck object is created with four wheels and a towing capacity.
A Car object is created with no wheels defined (inherits basic vehicle properties).
A Motorbike object is created with two wheels and an engine type.
Vehicle List: The vehicles array holds all the created vehicle objects, and the Cli class interacts with them.


