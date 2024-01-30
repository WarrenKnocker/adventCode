import { describe } from "mocha";
import { assert } from "chai";
import { identifyNumbers } from "../src";

describe("identifyNumbers", () => {
  it("should return 29", () => {
    let result = identifyNumbers("29lzrxseven");
    assert.equal(result, 29);
  });
});
