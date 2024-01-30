"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseReport = void 0;
function expenseReport(input) {
    let stringNumberArray = input.split("\n");
    let numArray = [];
    for (let item of stringNumberArray) {
        let digit = Number(item);
        numArray.push(digit);
    }
    for (let numberIndex = 0; numberIndex < numArray.length; numberIndex++) {
        let tempAnswer = 0;
        for (let testIndex = 0; testIndex < numArray.length; testIndex++) {
            if (testIndex !== numberIndex) {
                tempAnswer = numArray[numberIndex] + numArray[testIndex];
                if (tempAnswer == 2020) {
                    return numArray[numberIndex] * numArray[testIndex];
                }
            }
        }
    }
    return 0;
}
exports.expenseReport = expenseReport;
