import { multi } from '../js/multi';
test('adds 1 + 2 to equal 3', ()=>{
    expect(multi(4, 2)).toBe(8);
});
/* Comando utilizado
     node --experimental-vm-modules node_modules/jest/bin/jest.js
*/