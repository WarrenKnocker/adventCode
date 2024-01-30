"use strict";
// Seporate the string into groups
// Turn the string into numbers
// Sum the numbers
// return the greatest number
Object.defineProperty(exports, "__esModule", { value: true });
exports.findGreatestCalories = void 0;
// recursion:
// Check 1) Must have an exit point
// Check 2) Must take in a different input
// Check 3) Must call itself
/*
[1000\n2000\n3000, 4000\n, 5000\n6000, 7000\n8000\n9000, 10000]
*/
function findGreatestCalories(input) {
    let groupedCalories = input.split("\n\n");
    // ["5000\n6000","7000\n8000\n9000","10000"]
    // exit point
    if (groupedCalories.length == 1) {
        return Number(groupedCalories[0]);
    }
    //=============================
    let workingCalories = input[0].split("\n");
    // ["5000", "6000"]
    let elfTotalCalories = 0;
    for (let item of workingCalories) {
        let numCalorie = Number(item);
        elfTotalCalories = elfTotalCalories + numCalorie;
    }
    if (elfTotalCalories > findGreatestCalories(groupedCalories[1])) {
        return elfTotalCalories;
    }
    else {
        return findGreatestCalories(groupedCalories[1]);
    }
}
exports.findGreatestCalories = findGreatestCalories;
/*

*/
