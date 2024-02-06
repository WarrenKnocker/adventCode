"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalTallyCounter = exports.fuelCalculator = void 0;
function fuelCalculator(fuelAmount) {
    let tempAnswer = Math.floor(fuelAmount / 3 - 2);
    if (tempAnswer < 0) {
        return 0;
    }
    return tempAnswer + fuelCalculator(tempAnswer);
}
exports.fuelCalculator = fuelCalculator;
function TotalTallyCounter(str) {
    let strArray = str.split("\n");
    let result = 0;
    for (let item of strArray) {
        let itemTotalFuel = fuelCalculator(Number(item));
        result = result + itemTotalFuel;
    }
    return result;
}
exports.TotalTallyCounter = TotalTallyCounter;
