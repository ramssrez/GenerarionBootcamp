//Switch case para el caso de varias opciones con rangos
const x = parseInt(prompt("Ingresa tu edad"));
let menseje = " ";
switch (true) {
    case x > 0 && x < 18:
        //alert("x > 0 && x < 10");
        menseje = "Eres menor de edad";
        break;
    case x >= 18 && x < 25:
        //alert("x > 0 && x < 20");
        menseje = "Ya eres mayor de edad";
        break;
    case x >= 25 && x < 70:
        //alert("x < 0 || x > 10");
        menseje = "Eres un adulto joven";
        break;
    case x >= 70:
        //alert("x < 0 || x > 10");
        menseje = "Eres un adulto de la tercera edad";
        break;
    default:
        //alert("Ninguno");
        menseje = "Ninguno";
        break;
}
document.write(`<br/>  <p>${menseje}</p>`);