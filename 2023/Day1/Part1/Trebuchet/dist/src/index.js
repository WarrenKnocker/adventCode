"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identifyNumbers = exports.decipher = void 0;
function decipher(input) {
    let stringArray = input.split("\n");
    let decipheredNumbersArray = [];
    let summedNumberTotal = 0;
    for (let index = 0; index < stringArray.length; index++) {
        const workingItem = stringArray[index];
        const answer = identifyNumbers(workingItem);
        decipheredNumbersArray.push(answer);
    }
    for (let index = 0; index < decipheredNumbersArray.length; index++) {
        summedNumberTotal = summedNumberTotal + decipheredNumbersArray[index];
    }
    return summedNumberTotal;
}
exports.decipher = decipher;
function identifyNumbers(codedMessage) {
    let firstNumber = "";
    let secondNumber = "";
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let charachterArray = codedMessage.split("");
    for (let index = 0; index < charachterArray.length; index++) {
        if (numbers.includes(charachterArray[index])) {
            firstNumber = charachterArray[index];
            break;
        }
    }
    for (let index = charachterArray.length; index > -1; index--) {
        if (numbers.includes(charachterArray[index])) {
            secondNumber = charachterArray[index];
            break;
        }
    }
    const result = firstNumber.concat(secondNumber);
    return Number(result);
}
exports.identifyNumbers = identifyNumbers;
