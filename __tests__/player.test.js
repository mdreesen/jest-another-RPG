const Player = require('../lib/Player')
// Test command - npm run test Player


test('creates a player object', () => {
    const player = new Player('Mike');

     expect(player.name).toBe('Mike');
     expect(player.health).toEqual(expect.any(Number));
     expect(player.strength).toEqual(expect.any(Number));
     expect(player.agility).toEqual(expect.any(Number));
})