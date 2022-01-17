const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([6, 3], [4, 9, 1]), false);
assertEqual(eqArrays([3, 2, 1], [3, 2, 1]), true);