/*
    Estructura de control de flujo, nos ayuda a tomar decisiones
    mediante la evaluacion de una condición.
    (Tipo if)
*/

//Switch con strings
const nombre = prompt("Ingresa tu nombre");
switch(nombre.toLowerCase()){
    case "carlos" :
        menseje = "Eres administrador";
    break;
    case "juan":
        menseje = "Eres usuario";
    break;
    default:
        menseje = "No tienes permisos para usar el sistema";
        break; 
}
document.write(menseje);