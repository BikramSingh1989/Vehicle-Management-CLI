// src/classes/Wheel.ts

export class Wheel {
  size: number;
  brand: string;
  model: string;
  type: string;
  season: string;
  pressure: number;  
  pressureUnit: string;
  rimMaterial: string | undefined


  constructor(
    size: number,
    brand: string,
    model: string,
    type: string,
    season: string,
    pressure: number,  // number for pressure
    pressureUnit: string  // unit for pressure (e.g., "psi")
  ) {
    this.size = size;
    this.brand = brand;
    this.model = model;
    this.type = type;
    this.season = season;
    this.pressure = pressure;
    this.pressureUnit = pressureUnit;
  }
}
