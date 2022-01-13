const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object1, callback) {
  // console.log('This is an object: ', object1);
  // console.log('This is a callback: ', callback);
  //Loops through object keys
  for (const value in object1) {
    // console.log('This is the object value section: ', object1[value])
    //checks if the keys value of stars and returns the first true one
    if (callback(object1[value])) {
      // console.log('This is the object value: ', callback(object1[value]))
      // console.log('This is the object key value: ', value)
      return value;
    }
  }
};

const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(test, "noma");

const test2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1);

assertEqual(test2, "Blue Hill");

const test3 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4);

assertEqual(test3, "Akelarre");

