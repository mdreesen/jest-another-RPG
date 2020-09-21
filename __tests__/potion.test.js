const Potion = require('../lib/Potion.js');


// The "new" keyword creates a new object, in this case a new potion object
// "toBe" is like saying "this is"
// We have a name and value and we are "expect"ing
/* "expect.any()" method takes a constructor as an argument, we are expecting
    that the "value" property is created with a "number()" constructor
*/
/* constructor acts like a blueprint for objects, they dont have a return statement, they return undefined by default
    They are also meant to be used in conjunction with the "new" keyword */
    test('creates a health potion object', () => {
        const potion = new Potion('health');
      
        expect(potion.name).toBe('health');
        expect(potion.value).toEqual(expect.any(Number));
      });


      test('creates a random potion object', () => {
        const potion = new Potion();
      
        expect(potion.name).toEqual(expect.any(String));
        expect(potion.name.length).toBeGreaterThan(0);
        expect(potion.value).toEqual(expect.any(Number));
      });