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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {


//   const objKeyOne = Object.keys(object1);
//   const objKeyTwo = Object.keys(object2);
//   console.log(object1)
//   // console.log(objKeyOne, objKeyTwo)
//   // console.log(Object.values(object1, object2));
//   for(const i of objKeyOne) {
//     if(objKeyOne.length !== objKeyTwo.length) {
//       console.log('no')
//       if(Object.values(object1) !== Object.values(object2)) {
//         console.log('no')
//       }
//       // console.log(objKeyTwo.length)
//       //     console.log('yes')
//           return objKeyOne
//     } else {
//       // console.log(i)
//       // return objKeyOne + objKeyTwo
//     }
//   }
// };

const eqObjects = function(object1, object2) {
  //assign variables keys
  const objKeyOne = Object.keys(object1);
  const objKeyTwo = Object.keys(object2);
  //checks if key length are not equal 
  if(objKeyOne.length !== objKeyTwo.length) {
    return false
  }
  // console.log(objKeyOne, objKeyTwo)
  // console.log(Object.values(object1, object2));
  for(const i in object1) {
    // console.log(object1[i])
    // console.log(object2[i])
    //checks if object[value] is an array
    if(Array.isArray(object1[i]) || Array.isArray(object2[i])) {
      // console.log('Num 2: ', Array.isArray(object2[i]))
      // console.log('Num 1: ', Array.isArray(object1[i]) )
      //if eqArrays function object1[value] and object2[value] == !(false) return false
      if(!eqArrays(object1[i], object2[i])) {
        return false
        }   
      }
    }
    //if nothing else is false then return true
    return true;
  };


  //tests make sure to add assertEqual to eqObjects
  const ab = { a: "1", b: "2" };
  const ba = { a: "2", b: "1" };
  assertEqual(eqObjects(ab, ba), true); // => true
  
  const abc = { a: "1", b: "2", c: "3" };
 assertEqual(eqObjects(ab, abc), false); // => false
  
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
 assertEqual(eqObjects(cd, dc), true); // => true
  
  const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false