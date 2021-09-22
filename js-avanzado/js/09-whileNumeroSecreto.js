let num1 = parseInt(prompt("Ingresa un número"));
const numero_secreto = 23;
let aux = 0;
while(num1 !== numero_secreto){
    console.log("No adivinaste el número secreto, intenta de nuevo");
    num1 = parseInt(prompt("Ingresa un núemero"));
    aux++;
}
console.log(`Felicidades, encontraste un número secreto con ${aux} intentos`);