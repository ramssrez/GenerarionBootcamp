/* Operador ternario 
    Sirve para evaluar una estructura de flujo (if abreviado)
*/
let edad = 19;
if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}
          /* Condición/ es verdad             sino  */
let mensaje = edad >= 18 ? "Eres mayor de edad" : "eres menor de edad";
document.write(`<p>${mensaje}</p>`);