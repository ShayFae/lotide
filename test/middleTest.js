// const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("it should return 2,3 form [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("it should return 3,4 form [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });

  it("it should return 2,3 form 1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("it should return 2,3 form [5, 12, 3, 10]", () => {
    assert.deepEqual(middle([5, 12, 3, 10]), [12,3]);
  });

  it("it should return 3 form [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([6, 2, 8, 4, 25]), [8]);
  });

  it("it should return []] form [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("it should return [] form [9, 15]", () => {
    assert.deepEqual(middle([9, 15]), []);
  });

});