import { resta } from '../js/resta';
test('adds 1 + 2 to equal 3', ()=>{
    expect(resta(5, 2)).toBe(3);
});
/* Comando utilizado
     node --experimental-vm-modules node_modules/jest/bin/jest.js
*/