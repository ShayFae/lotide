const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(one, two){
  if (one.length !== two.length) {
    console.log(one.length, two.length)
    return false;
  };
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      // console.log(one[i], two[i])
      return false;
    }
  }
  return true;
};

// let first = '';
// let second = '';
// const eqArrays = function(one, two) {
// for(let i = 0; i < one.length; i++) {
//    first = first + one[i]
// }
// for(let y = 0; y < two.length; y++) {
//   second = second + two[y]
// }
// if(first === second) {
//   console.log(assertEqual)
// }
// console.log(first, second)
//   // if(one === two) {
//   //   // return true
//   // } else {
//   //   // return false  
//   // }
// }




assertEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]));

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3])
