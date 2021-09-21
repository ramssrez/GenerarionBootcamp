//prompt para ingresar los valores por parte del usuario
var numero = parseInt(prompt("Ingresa el primer número"));
var numeroDos = parseInt(prompt("Ingresa el segundo número"));
//Verificación de los números sean pares ambos o no
if(isInpar(numero) && isInpar(numeroDos)){
    document.write(`El número ${numero} y el número ${numeroDos} son impares`);
}else if(isInpar(numero)){
    document.write(`El número ${numero} es impar`);
}else if(isInpar(numeroDos)){
    document.write(`El número ${numeroDos} es impar`);
}else{
    document.write(`Ninguno de los números son impares`);
}
//Llamado a la impresión de varaibles
arregloFun(numero,numeroDos);
//Función que realiza la validación de si es par o no
function isInpar(value){
    if(!(value%2 === 0)){
        return true;
    }
}
function arregloFun(numero, numeroDos){
    let min = Math.min(numero,numeroDos);
    let max = Math.max(numero, numeroDos);
    let arregloImpar = [];
    for(let i = min + 1; i<max; i++ ){
        if(i%2 != 0){
            document.write(`${i},`);
            arregloImpar.push(i);
        }
    }
    console.log(arregloImpar.length)
    for(let i = 0 ; i < arregloImpar.length; i++){
        console.log(arregloImpar[i]);
    }
}