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
let l = '';
let arr = '';
const without = function(source, itemsToRemove) {
  if(source.includes(itemsToRemove.toString())) {
    arr = arr + itemsToRemove.toString()
    l = l + source.toString();  
    let sourceStr = l
    const total = removeMatch([arr], sourceStr)
    console.log(total)
    return total
  } else {
    console.log("error")
  }
  // console.log(source.findIndex(itemsToRemove))
  // console.log(source.includes(itemsToRemove.toString()))

  // if(source.toString() === arr) {
  //   console.log("asdasdas")
  // }
};
function removeMatch(words, sourceStr) {
  return words.reduce((result, word) => result.replace(word, ''), sourceStr)
}

// let test = ['cat', 'dog', 'mouse']
// if(test.includes('cat')){
//    console.log("yes")
// } else {
//   console.log("no")
// }

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
// const result = sum(filterInts(allNums(convertToNums(args))));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);