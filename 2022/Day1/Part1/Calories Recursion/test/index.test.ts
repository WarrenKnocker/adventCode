import { describe } from "mocha";
import { assert } from "chai";
import { findGreatestCalories } from "../src";

describe("findGreatestCalories", () => {
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

    const result = findGreatestCalories(adventData);
    assert.equal(result, 24000);
  });
});
