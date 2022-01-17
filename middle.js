const assertArraysEqual = require('./assertArraysEqual')
const eqArrays = require('./eqArrays');

const middle = function(arr1) {
  let midArray = [];
  if (arr1.length === 2 || arr1.length === 1) {
    return [];
  } else if (arr1.length % 2 === 0) {
    midArray.push(arr1[Math.floor((arr1.length - 1) / 2)], arr1[arr1.length / 2]);
  } else {
    midArray.push(arr1[Math.floor(arr1.length / 2)]);
  }
  return midArray;
};

module.exports = middle;