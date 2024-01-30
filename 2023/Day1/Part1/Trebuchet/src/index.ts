export function decipher(input: string): number {
  let stringArray: string[] = input.split("\n");
  let decipheredNumbersArray: number[] = [];
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

export function identifyNumbers(codedMessage: string): number {
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
