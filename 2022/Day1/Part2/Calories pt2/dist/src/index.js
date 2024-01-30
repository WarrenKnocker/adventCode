"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findTop3 = void 0;
function findTop3(input) {
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
        // console.log("Group Total: " + groupTotal)
    }
    let greatestNumber = 0;
    let secondGreatestNumber = 0;
    let thirdGreatestNumber = 0;
    for (let item of totals) {
        if (item > greatestNumber && item > secondGreatestNumber && item > thirdGreatestNumber) {
            //qualifies for first place
            if (item > greatestNumber && greatestNumber > secondGreatestNumber && secondGreatestNumber > thirdGreatestNumber) {
                thirdGreatestNumber = secondGreatestNumber;
                secondGreatestNumber = greatestNumber;
                greatestNumber = item;
            }
            if (item > greatestNumber && greatestNumber > secondGreatestNumber && secondGreatestNumber == thirdGreatestNumber) {
                thirdGreatestNumber = secondGreatestNumber;
                secondGreatestNumber = greatestNumber;
                greatestNumber = item;
            }
            if (item > greatestNumber && greatestNumber == secondGreatestNumber) {
                secondGreatestNumber = greatestNumber;
                greatestNumber = item;
            }
        }
        //qualifies for second place
        if (item < greatestNumber && item > secondGreatestNumber && item > thirdGreatestNumber) {
            if (secondGreatestNumber > thirdGreatestNumber) {
                thirdGreatestNumber = secondGreatestNumber;
                secondGreatestNumber = item;
            }
        }
        //qualifies for third
        if (item < greatestNumber && item < secondGreatestNumber && item > thirdGreatestNumber) {
            thirdGreatestNumber = item;
        }
    }
    // console.log("greatest number: " + greatestNumber)
    // console.log("secondGreatest number: " + secondGreatestNumber)
    // console.log("thirdGreates number: " + thirdGreatestNumber)
    return greatestNumber + secondGreatestNumber + thirdGreatestNumber;
}
exports.findTop3 = findTop3;
