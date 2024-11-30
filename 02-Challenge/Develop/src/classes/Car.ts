// src/classes/Car.ts
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
    constructor(
        vin: string,
        color: string,
        make: string,
        model: string,
        year: number,
        weight: number,
        topSpeed: number
    ) {
        super(vin, color, make, model, year, weight, topSpeed);
    }

    // Optionally override getDetails if you want to add more specific details for the car
    override getDetails(): string {
        return `${super.getDetails()} - Car`;
    }
}
