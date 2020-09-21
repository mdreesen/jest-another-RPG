const Player = require('../lib/Player')
// Test command - npm run test Player
const Potion = require('../lib/Potion')
jest.mock = ('../lib/Potion')
console.log(new Potion());


test('creates a player object', () => {
    const player = new Player('Mike');

     expect(player.name).toBe('Mike');
     expect(player.health).toEqual(expect.any(Number));
     expect(player.strength).toEqual(expect.any(Number));
     expect(player.agility).toEqual(expect.any(Number));
     expect(player.inventory).toEqual(
         expect.arrayContaining([expect.any(Object)])
     );
});

// -=- This tests for any stat object for a player -=-
// player needs to have these stats
// potions (if any), health, strength, agility
test("gets player's stats as an object", () => {
    const player = new Player('Mike');
  
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });

// -=- This tests for inventory object that the player has -=-
test('gets inventory from player or returns false', () => {
    const player = new Player('Mike');

    expect(player.getInventory()).toEqual(expect.any(Array));
    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
})

// Create test to get the player health
test('gets player health value', () => {
    const player = new Player('Mike');

    /* expect.stringContaining() method is an expect method that we can use to make sure
     our string incudes our player's health 
     This is preferred in this case because we might need flexibility mto change how the player's 
     health will be displayed. If that change happens we wont need to update our tests as well */
    expect(player.getHealth()).toEqual(expect.stringContaining(player.health.toString()));
})