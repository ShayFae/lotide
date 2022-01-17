const assertEqual = require('./assertEqual');

const head = function(assertEqual){
  return assertEqual[0];
};

module.exports = head;