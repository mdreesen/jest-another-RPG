/*
const Potion = require('../lib/Potion.js');

// toBeGreaterThanOrEqual and toBeLessThanOrEqual is provided by Jest
// These tests load when Jest loads the tests
// Documentation on these tests - https://jestjs.io/docs/en/expect
test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});
*/

/* 
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
    if (this.name === 'health') {
      this.value = Math.floor(Math.random() * 10 + 30);
    } else {
      this.value = Math.floor(Math.random() * 5 + 7);
    }
  };
  */

  class Potion {
    constructor(name) {
      this.types = ['strength', 'agility', 'health'];
      this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
  
      if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
      } else {
        this.value = Math.floor(Math.random() * 5 + 7);
      }
    }
  };
  
  module.exports = Potion;