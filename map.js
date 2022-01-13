//EqArrays Function
const eqArrays = function(one, two) {
  if (one.length !== two.length) {
    return false;
  }
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      return false;
    }
  }
  return true;
};

//EqArrays function used in the assertion function to compare arrays
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//First array
const words = ["ground", "control", "to", "major", "tom"];
const results = [];

const map = function(array, callback) {
  // console.log(arr, callback)
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

map(words, word => word[0]);

assertArraysEqual(results,(['a','b','c'])); //Second array to compare to words variable
assertArraysEqual(results,[1,2,3]);
assertArraysEqual(results,['g','c','t','m','t']);
assertArraysEqual(results,['G','C','T','M','T']);
assertArraysEqual(results,['g','C','t','M','t']);