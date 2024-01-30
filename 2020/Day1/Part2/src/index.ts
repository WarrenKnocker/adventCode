export function expenseReport(input: string): number {
  let stringNumberArray = input.split("\n");
  let numArray: number[] = [];

  for (let item of stringNumberArray) {
    let digit = Number(item);
    numArray.push(digit);
  }

  for (let numberIndex = 0; numberIndex < numArray.length; numberIndex++) {
    let tempAnswer = 0;
    for (let testIndex = 0; testIndex < numArray.length; testIndex++) {
      if (testIndex !== numberIndex) {
        for (
          let secondTestIndex = 0;
          secondTestIndex < numArray.length;
          secondTestIndex++
        ) {
          if (
            secondTestIndex !== numberIndex &&
            secondTestIndex !== testIndex
          ) {
            tempAnswer =
              numArray[numberIndex] +
              numArray[testIndex] +
              numArray[secondTestIndex];

            if (tempAnswer == 2020) {
              return (
                numArray[numberIndex] *
                numArray[testIndex] *
                numArray[secondTestIndex]
              );
            }
          }
        }
      }
    }
  }

  return 0;
}
