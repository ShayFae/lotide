const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("it should return 'Lighthouse', 'Labs' form ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("it should return 5,6,7 form [5, 6, 7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });

  it("it should return 'Awesome', 'Unicorns' form ['Super', 'Mega', 'Awesome', 'Unicorns']", () => {
    assert.deepEqual(tail(["Super", "Mega", "Awesome", "Unicorns"]), ["Mega", "Awesome", "Unicorns"]);
  });

  it("it should return 2 form [5,2]", () => {
    assert.deepEqual(tail([5,2]), [2]);
  });
});