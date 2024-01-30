"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const chai_1 = require("chai");
const src_1 = require("../src");
(0, mocha_1.describe)("identifyNumbers", () => {
    it("should return 29", () => {
        let result = (0, src_1.identifyNumbers)("29lzrxseven");
        chai_1.assert.equal(result, 29);
    });
});
