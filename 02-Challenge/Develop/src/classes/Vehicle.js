"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/classes/Vehicle.ts
var Vehicle = /** @class */ (function () {
    function Vehicle(vin, color, make, model, year, weight, topSpeed) {
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
    }
    // Base method for details, can be overridden in subclasses
    Vehicle.prototype.getDetails = function () {
        return "".concat(this.year, " ").concat(this.make, " ").concat(this.model, " (").concat(this.vin, ")");
    };
    return Vehicle;
}());
exports.default = Vehicle;
