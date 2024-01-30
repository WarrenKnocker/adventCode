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
                for (let secondTestIndex = 0; secondTestIndex < numArray.length; secondTestIndex++) {
                    if (secondTestIndex !== numberIndex &&
                        secondTestIndex !== testIndex) {
                        tempAnswer =
                            numArray[numberIndex] +
                                numArray[testIndex] +
                                numArray[secondTestIndex];
                        if (tempAnswer == 2020) {
                            return (numArray[numberIndex] *
                                numArray[testIndex] *
                                numArray[secondTestIndex]);
                        }
                    }
                }
            }
        }
    }
    return 0;
}
exports.expenseReport = expenseReport;
