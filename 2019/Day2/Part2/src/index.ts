export function gravityAssist2(input: string): number {
  let stringArray: string[] = input.split(",");
  let numberArray: number[] = [];

  for (let item of stringArray) {
    let number = Number(item.trim());
    numberArray.push(number);
  }

  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      let workingArray: number[] = Object.assign([], numberArray);
      let result = helper(workingArray, noun, verb);
      if (result == 19690720) {
        return 100 * noun + verb;
      }
    }
  }

  return 80085;
}

export function helper(
  workingArray: number[],
  noun: number,
  verb: number
): number {
  workingArray[1] = noun;
  workingArray[2] = verb;
  for (
    let positionIndex = 0;
    positionIndex < workingArray.length;
    positionIndex += 4
  ) {
    let opCode = workingArray[positionIndex];
    let num1 = workingArray[positionIndex + 1];
    let num2 = workingArray[positionIndex + 2];
    let changePositionIndex = workingArray[positionIndex + 3];

    if (opCode == 1) {
      let result = workingArray[num1] + workingArray[num2];
      workingArray[changePositionIndex] = result;
    }

    if (opCode == 2) {
      let result = workingArray[num1] * workingArray[num2];
      workingArray[changePositionIndex] = result;
    }
    if (opCode == 99) {
      break;
    }
  }

  return workingArray[0];
}
