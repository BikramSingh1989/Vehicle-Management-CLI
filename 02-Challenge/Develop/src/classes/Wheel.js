"use strict";
// src/classes/Wheel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wheel = void 0;
var Wheel = /** @class */ (function () {
    function Wheel(size, brand, model, type, season, pressure, // number for pressure
    pressureUnit // unit for pressure (e.g., "psi")
    ) {
        this.size = size;
        this.brand = brand;
        this.model = model;
        this.type = type;
        this.season = season;
        this.pressure = pressure;
        this.pressureUnit = pressureUnit;
    }
    return Wheel;
}());
exports.Wheel = Wheel;
