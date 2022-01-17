const assertEqual = require('./assertEqual');

const tail = function(assertEqual) {
  return assertEqual.slice(1);
};

module.exports = tail;