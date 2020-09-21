const potion = require('../lib/Potion')

function Player(name = '') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new potion('health'), new potion()];

    // Returns an object with various player properties
    this.getStats = function() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    };

    // Returns the inventory array or false if empty
    this.getInventory = function() {
        if (this.inventory.length) {
            return this.inventory
        } else {
            return false
        };
    }
};

module.exports = Player