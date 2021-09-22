/*
    Ciclo while
    Nos permite repetir de codigo mientras una condición
    se a verdadera
    while("Condición verdadera"){
        "Se ejecuta hasta que sea verdedero
    }
*/
let numUno = parseInt(prompt("Ingresa un número"));
//While para evaluar que sea un número a que el usuario ingrese un número
let numero = 0;
while(isNaN(numUno)){
    numUno = parseInt(prompt("Ingresa un número"));
    numero++;
}
console.log(numero);
//While cuando se le asigna un valor para que 
let validacion = true;
while(validacion){
    numero++;
    console.log(`Numero: ${numero}`);
    if (numero === 20){
        validacion = false;
    }
}