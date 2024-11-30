// src/classes/Motorbike.ts
import Vehicle from './Vehicle';
import { Wheel } from './Wheel';

export default class Motorbike extends Vehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    public engineType: string, // Engine type specific to motorbike
    public wheels: Wheel[] // Array of wheels
  ) {
    // Call the parent constructor (Vehicle)
    super(vin, color, make, model, year, weight, topSpeed);
  }
}
