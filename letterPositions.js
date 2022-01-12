const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚨 Assertion Failed: ${arr1} !== ${arr2}`);
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

//Function that returns zero-based positions within a string for each character
const letterPositions = function(sentence) {
  //empty Object to hold return value
  const results = {};
  //For this problem we need the index number for each letter so I used a for loop 
  for(let i = 0; i < sentence.length; i++) {
    // console.log(sentence[i])
    //If sentence[index] is already in the object I would then push into the array with it
    if(results[sentence[i]]) {
      results[sentence[i]].push(i)
    //if not I would make a new key and create a new array as its value
    } else {
      results[sentence[i]] = [i]
    }
    // console.log(`${sentence[i]} : ${i}`)
    // results["sentence"] = sentence[i]
}
  
  console.log(results)
  return results;
};

// letterPositions("lighthouse in the house");
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("suspicious").s, [0,2,9]);
assertArraysEqual(letterPositions("frustrated").t, [4,7]);
assertArraysEqual(letterPositions("my cat name is hobi").i, [12,18]);