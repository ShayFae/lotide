const eqArrays = function(one, two){
  if (one.length !== two.length) {
    return false;
  };
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([2,2,3], [4,2,6]);
assertArraysEqual([2,2,3], [2,2,3]);



