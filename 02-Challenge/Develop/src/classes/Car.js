"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// src/classes/Car.ts
var Vehicle_1 = require("./Vehicle");
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(vin, color, make, model, year, weight, topSpeed) {
        return _super.call(this, vin, color, make, model, year, weight, topSpeed) || this;
    }
    // Optionally override getDetails if you want to add more specific details for the car
    Car.prototype.getDetails = function () {
        return "".concat(_super.prototype.getDetails.call(this), " - Car");
    };
    return Car;
}(Vehicle_1.default));
exports.default = Car;
