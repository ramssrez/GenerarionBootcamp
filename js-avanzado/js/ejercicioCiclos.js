let suma = 0, contador =0;
let numUno = parseInt(prompt("Ingresa un número"));
while(numUno > 0){
    suma = suma + numUno;
    numUno = parseInt(prompt("Ingresa un número"));
    contador++;
}
console.log(suma);
console.log(contador);
document.write(`La suma es ${suma} con el promedio ${suma/contador}`);