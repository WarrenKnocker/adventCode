export function fuelCalculator(fuelAmount: number): number {
  let tempAnswer = Math.floor(fuelAmount / 3 - 2);

  if (tempAnswer < 0) {
    return 0;
  }

  return tempAnswer + fuelCalculator(tempAnswer);
}

export function TotalTallyCounter(str: string): number {
  let strArray = str.split("\n");

  let result = 0;
  for (let item of strArray) {
    let itemTotalFuel = fuelCalculator(Number(item));
    result = result + itemTotalFuel;
  }

  return result;
}
