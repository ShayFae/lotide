const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function parameter genre = object and show = show name
const findKeyByValue = function(genre, show) {
  //used object.keys to get keys from the genre and attached it to the key variable
  const key = Object.keys(genre);
  //looped through the key variable
  for (const i of key) {
  //checked if show is equal to the genre object[i] and to return the key if so
    if (show === genre[i]) {
      return i;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
