/*
    Solcitar número al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado

*/
let numeroUno = [];
let numeroDos = [];
let sumaUno = 0,sumaDos= 0;
let numUno = parseInt(prompt("Ingresa el primer número"));
let numDos = parseInt(prompt("Ingresa el segundo número"));
let validacion = true;
while(validacion){
    if((numUno <= 0)||(numDos <= 0)){
        validacion = false;
    }else{
        numeroUno.push(numUno);
        numeroDos.push(numDos);
        numUno = parseInt(prompt("Ingresa el primer número"));
        numDos = parseInt(prompt("Ingresa el segundo número"));
        numeroUno.push(numUno);
        numeroDos.push(numDos);
    }

}
for(let i=0; i<numeroUno.length;i++){
    sumaUno = sumaUno + numeroUno[i];
}
for(let i=0; i<numeroDos.length;i++){
    sumaDos = sumaDos + numeroDos[i];
}
console.log(`La suma de los números unos son: ${sumaUno} y el promedio es: ${sumaUno/numeroUno.length}`);
console.log(`La suma de los números unos son: ${sumaDos} y el promedio es: ${sumaDos/numeroDos.length}`);