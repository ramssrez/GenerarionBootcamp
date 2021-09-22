const edad = parseInt(prompt("Ingresa tu edad"));
let menseje = " ";
switch(edad){
    case 18:
        menseje = "Acaba de cumplir la mayoría de edad";
        break;
    case 25:
        menseje = "Ya eres un adulto";
        break;
    case 70:
        menseje = "Ya eres de la tercera edad";
        break;
    default:
        menseje = "Fuera del rango de edad";
        break;     
}
document.write(`<p>${menseje}</p>`);