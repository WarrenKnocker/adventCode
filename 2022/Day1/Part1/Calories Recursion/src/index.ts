// Seporate the string into groups
// Turn the string into numbers
// Sum the numbers
// return the greatest number

// recursion:
// Check 1) Must have an exit point
// Check 2) Must take in a different input
// Check 3) Must call itself

/*
[1000\n2000\n3000, 4000\n, 5000\n6000, 7000\n8000\n9000, 1000\n2000]
*/

export function findGreatestCalories(input: string): number {
  let totaledCalories = [];
  let groupedCalories = input.split("\n\n");
  // ["1000\n2000"]

  // Sum Section

  for (let item of groupedCalories) {
    let workingCalories: string[] = input[0].split("\n");
    // ["1000", "2000"]

    let elfTotalCalories = 0;

    for (let item of workingCalories) {
      let numCalorie = Number(item);
      elfTotalCalories = elfTotalCalories + numCalorie;
    }

    totaledCalories.push(elfTotalCalories);
  }

  //============================
  // exit point
  if (totaledCalories.length == 1) {
    return Number(totaledCalories[0]);
  }
  //=============
  // doesnt exit

  if()

  return
}

/*

["5000\n6000","7000\n8000\n9000","10000"]
["7000\n8000\n9000","10000"]
["10000"]

["10000"] = 10000
["7000\n8000\n9000","10000"] = 24000
["5000\n6000","7000\n8000\n9000","10000"] = 24000
*/
