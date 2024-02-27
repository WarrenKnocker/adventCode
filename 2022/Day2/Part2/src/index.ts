export function theGame(input: string): number {
  const gamePlays = input.split("\n");
  let sumTotal = 0;

  const rock = 1;
  const paper = 2;
  const sissors = 3;

  for (let game of gamePlays) {
    let opponentsMove = game[0];
    let yourMove = game[2];

    let opponentsScore = 0;
    let yourscore = 0;

    if (opponentsMove == "A") {
      opponentsScore = rock;
    }
    if (opponentsMove == "B") {
      opponentsScore = paper;
    }
    if (opponentsMove == "C") {
      opponentsScore = sissors;
    }

    //====== Loose
    if (yourMove == "X") {
      if (opponentsScore == rock) {
        yourscore = sissors;
        sumTotal = sumTotal + sissors + 0;
        continue;
      }
      if (opponentsScore == paper) {
        yourscore = rock;
        sumTotal = sumTotal + rock + 0;
        continue;
      }
      if (opponentsScore == sissors) {
        yourscore = paper;
        sumTotal = sumTotal + paper + 0;
        continue;
      }
    }

    //======Draw
    if (yourMove == "Y") {
      if (opponentsScore == rock) {
        yourscore = rock;
        sumTotal = sumTotal + rock + 3;
        continue;
      }
      if (opponentsScore == sissors) {
        yourscore = sissors;
        sumTotal = sumTotal + sissors + 3;
        continue;
      }
      if (opponentsScore == paper) {
        yourscore = paper;
        sumTotal = sumTotal + paper + 3;
        continue;
      }
    }
    //======Win

    if (yourMove == "Z") {
      if (opponentsScore == rock) {
        yourscore = paper;
        sumTotal = sumTotal + paper + 6;
        continue;
      }
      if (opponentsScore == sissors) {
        yourscore = rock;
        sumTotal = sumTotal + rock + 6;
        continue;
      }
      if (opponentsScore == paper) {
        yourscore = sissors;
        sumTotal = sumTotal + sissors + 6;
        continue;
      }
    }
  }
  return sumTotal;
}
