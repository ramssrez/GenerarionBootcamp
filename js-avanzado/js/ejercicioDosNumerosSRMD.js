/* 
Realizar un programa que lea por teclado dos números, 
si el primero es mayor al segundo informar su suma y diferencia,
 en caso contrario informar el producto y la división del primero respecto al segundo.
*/
//prompt para ingresar los valores por parte del usuario
var numero = parseInt(prompt("Ingresa el primer número"));
var numeroDos = parseInt(prompt("Ingresa el segundo número"));

if(isNaN(numero) || isNaN(numeroDos)){
    console.log("No son números las variables ingresadas")
}else if (numero > numeroDos){
    console.log(suma(numero,numeroDos));
    console.log(resta(numero,numeroDos));
}else if(numero === numeroDos){
    console.log("Los numeros son iguales")
}else{
    console.log(multi(numero,numeroDos));
    console.log(div(numero,numeroDos));
}

function suma(numUno, numDos){
    let suma = numUno + numDos;
    return `La suma de ${numUno} y ${numDos} es: ${suma}`;
}
function resta(numUno, numDos){
    let resta = numUno - numDos;
    return `La resta de ${numUno} y ${numDos} es: ${resta}`;
}
function multi(numUno, numDos){
    let multi = numUno * numDos;
    return `La multiplicación de ${numUno} y ${numDos} es: ${multi}`;
}
function div(numUno, numDos){
    let div = numUno / numDos;
    return `La división de ${numUno} y ${numDos} es: ${div}`;
}