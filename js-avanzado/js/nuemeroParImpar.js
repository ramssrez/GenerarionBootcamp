//Variable que declara el año de nacimiento del usuario
var numero = parseInt(prompt("¿Ingresa el numero que quieres conocer"));
if(isPar(numero)){
    document.write(`El número  ${numero} es Par`);
}else{
    document.write(`El número  ${numero} es Impar`);
}

function isPar(value){
    if(value%2 === 0){
        return true;
    }else{
        return false;
    }
}

