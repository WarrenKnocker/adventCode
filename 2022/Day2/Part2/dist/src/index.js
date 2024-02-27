"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theGame = void 0;
function theGame(input) {
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
        // All code is working up untill this point
        //====== Loose
        if (yourMove == "X") {
            if (opponentsScore == rock) {
                yourscore = sissors;
                sumTotal = sumTotal + sissors + 0;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = Rock & Loose(X)");
                // console.log("match score = " + 0);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
            if (opponentsScore == paper) {
                yourscore = rock;
                sumTotal = sumTotal + rock + 0;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = paper & Loose(X)");
                // console.log("match score = " + 0);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
            if (opponentsScore == sissors) {
                yourscore = paper;
                sumTotal = sumTotal + paper + 0;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = Sissors & Loose(X)");
                // console.log("match score = " + 0);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
        }
        //======Draw
        if (yourMove == "Y") {
            if (opponentsScore == rock) {
                yourscore = rock;
                sumTotal = sumTotal + rock + 3;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = Rock & Draw(Y)");
                // console.log("match score = " + 3);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
            if (opponentsScore == sissors) {
                yourscore = sissors;
                sumTotal = sumTotal + sissors + 3;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = Sissors & Draw(Y)");
                // console.log("match score = " + 3);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
            if (opponentsScore == paper) {
                yourscore = paper;
                sumTotal = sumTotal + paper + 3;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = paper & Draw(Y)");
                // console.log("match score = " + 3);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
        }
        //======Win
        if (yourMove == "Z") {
            if (opponentsScore == rock) {
                yourscore = paper;
                sumTotal = sumTotal + paper + 6;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = Rock & Win(Z)");
                // console.log("match score = " + 6);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
            if (opponentsScore == sissors) {
                yourscore = rock;
                sumTotal = sumTotal + rock + 6;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = Sissors & Win(Z)");
                // console.log("match score = " + 6);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
            if (opponentsScore == paper) {
                yourscore = sissors;
                sumTotal = sumTotal + sissors + 6;
                // console.log("Inputs: " + opponentsMove + "|" + yourMove);
                // console.log("Opponent score = " + opponentsScore);
                // console.log("Your score = " + yourscore);
                // console.log("Were you are in: Opponent = paper & Win(Z)");
                // console.log("match score = " + 6);
                // console.log("sumTotal = " + sumTotal);
                // console.log("================");
                continue;
            }
        }
    }
    return sumTotal;
}
exports.theGame = theGame;
