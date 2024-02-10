"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravityAssist = void 0;
function gravityAssist(input) {
    let stringArray = input.split(",");
    let numberArray = [];
    for (let item of stringArray) {
        let number = Number(item.trim());
        numberArray.push(number);
    }
    numberArray[1] = 12;
    numberArray[2] = 2;
    console.log("Num Array =" + numberArray);
    for (let positionIndex = 0; positionIndex < numberArray.length; positionIndex = positionIndex + 4) {
        let opCode = numberArray[positionIndex];
        let num1 = numberArray[positionIndex + 1];
        let num2 = numberArray[positionIndex + 2];
        let changePositionIndex = numberArray[positionIndex + 3];
        // console.log("opCode: " + opCode);
        // console.log("num1: " + num1);
        // console.log("num2: " + num2);
        // console.log("changePositionINdex: " + changePositionIndex);
        if (opCode == 1) {
            let result = num1 + num2;
            numberArray[changePositionIndex] = result;
        }
        if (opCode == 2) {
            let result = num1 * num2;
            numberArray[changePositionIndex] = result;
        }
        if (opCode == 99) {
            break;
        }
    }
    console.log("+\n + \n +updated number Array:" + numberArray);
    return numberArray[0];
}
exports.gravityAssist = gravityAssist;
