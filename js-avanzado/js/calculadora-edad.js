//Variable que declara el año de nacimiento del usuario
var nacimiento = parseInt(prompt("¿Ingreso tu año de nacimiento"));
//Instancia de la fecha actual que se obtiene del sistema
const fecha = new Date();
//Recuperación del año actual del sistema
var aniActual = fecha.getFullYear();
//Impresión del tipo de dato del año del sistema
console.log(typeof(fecha.getFullYear()));
//Calculo de la edad con lo que ingreso el usuario y el año del sistema
var edad = aniActual - nacimiento;
//Variable que imprime la edad del usuairo en años
var resultado = `Tu edad es: ${edad} años`;
//Impresión en document y console de la edad del 
document.write(resultado);
console.log(resultado);

