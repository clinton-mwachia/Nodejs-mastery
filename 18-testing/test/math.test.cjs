const { expect } = require("chai");
const { add } = require("../math.cjs");

describe("add()", function () {
  it("should return 5 when adding 2 and 3", function () {
    expect(add(2, 3)).to.equal(5);
  });

  it("should not return 5 when adding 2 and 2", function () {
    expect(add(2, 2)).to.not.equal(5);
  });
});
