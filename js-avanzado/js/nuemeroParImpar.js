//Variable que declara el año de nacimiento del usuario
var numero = parseInt(prompt("¿Ingresa el numero que quieres conocer"));
isPar(numero);
function isPar(value){
    if(value%2 === 0){
        document.write(`El número  ${value} es Par`);
    }else{
        document.write(`El número  ${value} es Impar`);
    }
}

