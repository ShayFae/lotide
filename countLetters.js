// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//function that takes a string and returns a count for each letter
const countLetters = function(word) {
  //Had to add a new variable to remove the comma so it's not counted withing the word variable when I loop it
  let removeComma = word.split(' ').join('');
  //Needed an empty object to place my counted letter key/values in
  let letterObj = {};
  //looped through the comma free loop and iterated up the a number with each matching key
  for (const letter of removeComma) {
    if (letterObj[letter]) {
      letterObj[letter] += 1;
    } else {
      letterObj[letter] = 1;
    }
  }
  console.log(letterObj);
  //returned the final object that contains each letter in the word and the number of how many times it appeared in it
  return letterObj;
};

//Tes code
countLetters('LHL');
countLetters("lighthouse in the house");
countLetters("How about this many spaces in this one sentence!");

// const word = ['LHL'];

