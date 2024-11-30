// src/classes/Truck.ts
import Vehicle from './Vehicle';  // Correct import for Vehicle class
import { Wheel } from './Wheel';  // Correct import for Wheel class

export default class Truck extends Vehicle {
    wheels: Wheel[];
    towingCapacity: number;

    constructor(
        vin: string,
        color: string,
        make: string,
        model: string,
        year: number,
        weight: number,
        topSpeed: number,
        wheels: Wheel[],
        towingCapacity: number
    ) {
        super(vin, color, make, model, year, weight, topSpeed);  // Call parent constructor
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
    }

    // Optionally override getDetails if you want to add more specific details for the truck
    override getDetails(): string {
        return `${super.getDetails()} - Towing Capacity: ${this.towingCapacity} lbs`;
    }
}
