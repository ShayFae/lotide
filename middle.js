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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//Create middle function that returns an array with only middle contents
//edge arrays with one or two return an empty array
//if odd it should return a single number
//if even it should return two numbers
const middle = function(arr1) {
  //New array to hold
  let midArray = [];
  //if the array equals 2 or 1 inputs it will return an empty array
  if (arr1.length === 2 || arr1.length === 1) {
    console.log([]);
    return [];
  //if the length of the array is even it will push the array.length divided by 2 then minus one and an array length divided by two
  } else if (arr1.length % 2 === 0) {
    //Another option
    // midArray.push(arr1[(arr1.length / 2) - 1], arr1[arr1.length / 2])
    midArray.push(arr1[Math.floor((arr1.length - 1) / 2)], arr1[arr1.length / 2]);
    // console.log(midArray)
  } else {
    midArray.push(arr1[Math.floor(arr1.length / 2)]);
  // console.log(midArray)
  }
  console.log(midArray);
  return midArray;
};

// assertArraysEqual(middle([1, 2, 3, 4])) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1]); // => []
middle([1, 2]); // => []