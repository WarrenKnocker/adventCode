"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theGame = void 0;
function theGame(input) {
    const gamePlays = input.split("\n");
    let sumTotal = 0;
    let counter = 0;
    for (let game of gamePlays) {
        let opponentsMove = game[0];
        let yourMove = game[2];
        let opponentsScore = 0;
        let yourscore = 0;
        if (opponentsMove == "A") {
            opponentsScore = 1;
        }
        if (opponentsMove == "B") {
            opponentsScore = 2;
        }
        if (opponentsMove == "C") {
            opponentsScore = 3;
        }
        if (yourMove == "X") {
            yourscore = 1;
        }
        if (yourMove == "Y") {
            yourscore = 2;
        }
        if (yourMove == "Z") {
            yourscore = 3;
        }
        if (yourscore == 1 && opponentsScore == 3) {
            sumTotal = sumTotal + yourscore + 6;
            continue;
        }
        if (yourscore == 3 && opponentsScore == 1) {
            sumTotal = sumTotal + yourscore;
            continue;
        }
        if (yourscore > opponentsScore) {
            sumTotal = sumTotal + yourscore + 6;
        }
        if (yourscore < opponentsScore) {
            sumTotal = sumTotal + yourscore + 0;
        }
        if (yourscore == opponentsScore) {
            sumTotal = sumTotal + yourscore + 3;
        }
    }
    return sumTotal;
}
exports.theGame = theGame;
