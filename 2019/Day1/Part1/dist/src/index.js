"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuelCalculator = void 0;
function fuelCalculator(str1) {
    let stringArray = str1.split("\n");
    let result = 0;
    for (let item of stringArray) {
        let numberedItem = Number(item);
        numberedItem = Math.floor(numberedItem / 3) - 2;
        result = result + numberedItem;
    }
    return result;
}
exports.fuelCalculator = fuelCalculator;
