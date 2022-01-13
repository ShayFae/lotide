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

// let results = [];

//Function holds two parameters one the array the other a callback value
const takeUntil = function(array, callback) {
  // console.log('This is an array ',array)
  // console.log('this is the callback ', callback)
  for (const item of array) {
    // console.log(item)
    //checking booleans for first true value
    if (callback(item) === true) {
      //Found the index of the first truthy value
      const truthyIndex = array.indexOf(item);
      ////then sliced the array from 0 to the index of the first truthy value
      return array.slice(0, truthyIndex);
      //then sliced the array from 0 to the index of the first truthy value and pushed it into an empty array
      // results.push(array.slice(0, truthyIndex))
    }
  }
  return array;
};

//Tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ],); //Second array to compare to words variable
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);  //Second array to compare to words variable