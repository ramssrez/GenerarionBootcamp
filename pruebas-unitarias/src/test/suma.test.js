import { suma } from '../js/suma';
test('adds 1 + 2 to equal 3', ()=>{
    expect(suma(1, 2)).toBe(3);
});
/* Comando utilizado
     node --experimental-vm-modules node_modules/jest/bin/jest.js
*/