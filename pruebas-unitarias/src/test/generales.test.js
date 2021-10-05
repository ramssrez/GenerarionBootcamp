describe("probando jest", ()=>{
    test("Prueba de objetos", () =>{
        const datos1 ={
            nombre : "Raúl Ramírez",
            edad : 29
        };
        const datos2 = {
            nombre : "Raúl Ramírez Pérez",
            edad : 29
        }
        expect(datos1).toEqual(datos2);
    })
});
/* 
    Para que el test continue realizando las pruebas
    node --experimental-vm-modules node_modules/jest/bin/jest.js --watchAll
 */