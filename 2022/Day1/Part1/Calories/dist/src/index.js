"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMostCalories = void 0;
function findMostCalories(input) {
    const groupedArray = input.split("\n\n");
    const totals = [];
    for (let item of groupedArray) {
        const groupedNumbers = item.split("\n");
        let groupTotal = 0;
        for (let index = 0; index < groupedNumbers.length; index++) {
            let digit = Number(groupedNumbers[index]);
            groupTotal = groupTotal + digit;
        }
        totals.push(groupTotal);
    }
    let greatestNumber = 0;
    for (let item of totals) {
        if (item > greatestNumber) {
            greatestNumber = item;
        }
    }
    return greatestNumber;
}
exports.findMostCalories = findMostCalories;
