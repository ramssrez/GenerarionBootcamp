const nombre = prompt("¿Cual es tu nombre?");
const edad = prompt("¿Cual es tu edad?");
console.log("Hola " + nombre + " saludos. Tu edad es: " + edad + " años");
//Uso de comillas `` (alt + 96 ASCII) para que se ingrese un mensaje con las constantes ingresadas 
const saludo = `Hola ${nombre} saludos. Tu edad es: ${edad} años`;
console.log("Esto es con estas comillas `` ")
console.log(saludo);
document.write(saludo);