/*
    Mostrar todos los numero divisores de un número introducido.
*/

let numUno = parseInt(prompt("Ingresa un número"));
let validacion = true;
let numero = 0;
//Opción de verificar el número divisible con un ciclo while
while(validacion){
    //numUno = parseInt(prompt("Ingresa un número"));
    if(numUno % numero === 0){
        console.log(`Es divisible con ${numero}`);
    }
    numero++;
    if(numero === numUno){
        validacion = false;
    }
}
//Opción del número divisible con un for
let n1 = prompt("Escribe un número");
let i;
for (i=0;i < n1; i++) {
    if (n1 % i === 0) {
        document.write(`${i}, `);
    }
} 