"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const src_1 = require("../src");
(0, mocha_1.describe)("findGreatestCalories", () => {
    it("should return the greatest amount of calories", () => {
        const adventData = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
        const result = (0, src_1.findGreatestCalories)(adventData);
        chai_1.assert.equal(result, 24000);
    });
});
