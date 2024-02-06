export function fuelCalculator(str1: string): number {
  let stringArray: string[] = str1.split("\n");

  let result = 0;
  for (let item of stringArray) {
    let numberedItem = Number(item);
    numberedItem = Math.floor(numberedItem / 3) - 2;
    result = result + numberedItem;
  }

  return result;
}
