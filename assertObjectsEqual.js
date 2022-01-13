const eqArrays = function(one, two) {
  if (one.length !== two.length) {
    console.log(one.length, two.length);
    return false;
  }
  for (let i = 0; i < one.length; i++) {
    if (one[i] !== two[i]) {
      return false;
    }
  }
  return true;
};
  
const eqObjects = function(object1, object2) {
  const objKeyOne = Object.keys(object1);
  const objKeyTwo = Object.keys(object2);
  if (objKeyOne.length !== objKeyTwo.length) {
    return false;
  }
  for (const i in object1) {
    if (Array.isArray(object1[i]) || Array.isArray(object2[i])) {
      if (!eqArrays(object1[i], object2[i])) {
        return false;
      }
    }
  }
  return true;
};

//function with two object parameters and will console.log the assertion message depending on if it passes or not
const assertObjectsEqual = function(object1, object2) {
  //in order to not get [object][object] === [object][object] we make a inspect variable that imports the  util library
  const inspect = require('util').inspect; // <= add this line
  //Uses eqObject funtion to compare objects
  if (eqObjects(object1,object2)) {
    // console.log(`Example label: ${inspect(object1)}`);
    //within the assertion we use the  util library's inspect function alllowing the object to show
    console.log(`👍 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🚨 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

//test examples
const ab = { a: "1", b: "2" };
const ba = { a: "2", b: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false