const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
  if(itemsToCount[item]) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  }
return results;

};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

//Function recieves items and returns a count of specific items
// let test = {};
// const countOnly = function(allItems, itemsToCount) {
//   for(const x in allItems) {
//     console.log(allItems[x])
//     test["name"] = allItems[x];
//     // if(allItems[x] === itemsToCount) {
//     //   console.log("yes")
//     // }
//   }
//   for(const y in itemsToCount) {
//     console.log(itemsToCount[y])
//     // test["count"] = itemsToCount[y]
//   }
//   // console.log(allItems)
//   // console.log(itemsToCount)
//   console.log(test)
// };