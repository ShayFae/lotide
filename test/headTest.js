const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("it should return 1 form [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("it should return 5 form [5]", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("it should return 8 form [8, 6, 7]", () => {
    assert.strictEqual(head([8, 6, 7]), 8);
  });

  it("it should return 'Hello' form ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("it should return 1 form [1]", () => {
    assert.strictEqual(head([1]), 1);
  });

  it("it should return undefined form []", () => {
    assert.strictEqual(head([]), undefined);
  });

});