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
// src/classes/Motorbike.ts
var Vehicle_1 = require("./Vehicle");
var Motorbike = /** @class */ (function (_super) {
    __extends(Motorbike, _super);
    function Motorbike(vin, color, make, model, year, weight, topSpeed, engineType, // Engine type specific to motorbike
    wheels // Array of wheels
    ) {
        // Call the parent constructor (Vehicle)
        var _this = _super.call(this, vin, color, make, model, year, weight, topSpeed) || this;
        _this.engineType = engineType;
        _this.wheels = wheels;
        return _this;
    }
    return Motorbike;
}(Vehicle_1.default));
exports.default = Motorbike;
