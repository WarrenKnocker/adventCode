export function decipherPt1(input: string): number {
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

//===================================

export function identifyNumbersPt2(codedMessage: string): number {
  let foundItems: string[] = [];
  let charachterArray: string[] = codedMessage.split("");
  let firstNumber = "";
  let secondNumber = "";

  for (
    let startPositionIndex = 0;
    startPositionIndex < charachterArray.length;
    startPositionIndex++
  ) {
    let testingString = charachterArray[startPositionIndex];

    if (testingString == "1") {
      foundItems.push("1");
      continue;
    }
    if (testingString == "2") {
      foundItems.push("2");
      continue;
    }
    if (testingString == "3") {
      foundItems.push("3");
      continue;
    }
    if (testingString == "4") {
      foundItems.push("4");
      continue;
    }
    if (testingString == "5") {
      foundItems.push("5");
      continue;
    }
    if (testingString == "6") {
      foundItems.push("6");
      continue;
    }
    if (testingString == "7") {
      foundItems.push("7");
      continue;
    }
    if (testingString == "8") {
      foundItems.push("8");
      continue;
    }
    if (testingString == "9") {
      foundItems.push("9");
      continue;
    }

    for (
      let searchIndex = startPositionIndex + 1;
      searchIndex < charachterArray.length;
      searchIndex++
    ) {
      testingString = testingString + charachterArray[searchIndex];

      if (testingString == "one") {
        foundItems.push("1");
        break;
      }
      if (testingString == "two") {
        foundItems.push("2");
        break;
      }
      if (testingString == "three") {
        foundItems.push("3");
        break;
      }
      if (testingString == "four") {
        foundItems.push("4");
        break;
      }
      if (testingString == "five") {
        foundItems.push("5");
        break;
      }
      if (testingString == "six") {
        foundItems.push("6");
        break;
      }
      if (testingString == "seven") {
        foundItems.push("7");
        break;
      }
      if (testingString == "eight") {
        foundItems.push("8");
        break;
      }
      if (testingString == "nine") {
        foundItems.push("9");
        break;
      }
      if (testingString.length > 5) {
        break;
      }
    }
  }

  //==============================
  // Go through the numbers in the array and select the first and last number

  firstNumber = foundItems[0];
  secondNumber = foundItems[foundItems.length - 1];

  return Number(firstNumber + secondNumber);
}

export function decipherPt2(input: string): number {
  let stringArray: string[] = input.split("\n");
  let decipheredNumbersArray: number[] = [];
  let summedNumberTotal = 0;

  for (let index = 0; index < stringArray.length; index++) {
    const workingItem = stringArray[index];
    const answer = identifyNumbersPt2(workingItem);
    decipheredNumbersArray.push(answer);
  }

  for (let index = 0; index < decipheredNumbersArray.length; index++) {
    summedNumberTotal = summedNumberTotal + decipheredNumbersArray[index];
  }

  return summedNumberTotal;
}
