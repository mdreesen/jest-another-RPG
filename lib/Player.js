const potion = require('../lib/Potion')

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new potion('health'), new potion()];

    // Returns an object with various player properties
    Player.prototype.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // -=- This bottom portion works with the "this" keyword, both functions do the same thing -=-

    /*
    this.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };
    */

    // Returns the inventory array or false if empty
    Player.prototype.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory
        } else {
            return false
        };
    };

    // -=- This bottom portion works with the "this" keyword, both functions do the same thing -=-

    /*
    this.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory
        } else {
            return false
        };
    }
    */

<<<<<<< HEAD
    Player.prototype.getHealth = function() {
        return `${this.name}'s health is now ${this.health}!`;
    }
=======
   Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

   Player.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };

>>>>>>> 42524d6c9a106fc697e280aa1528a535fdfbd91c
};

module.exports = Player