// src/classes/Vehicle.ts
export default class Vehicle {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;

    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
    }

    // Base method for details, can be overridden in subclasses
    getDetails(): string {
        return `${this.year} ${this.make} ${this.model} (${this.vin})`;
    }
    
}
