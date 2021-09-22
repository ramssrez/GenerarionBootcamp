/*
    Ciclo while
    Nos permite repetir de codigo mientras una condición
    se a verdadera
    do{
        Ejecuta primero despues pregunta
    }while("Condición")
*/
let numUno = parseInt(prompt("Ingresa un número")); 
do{
    document.write(`<p>El número introducido es: ${numUno}</p>`)
    numUno = parseInt(prompt("Ingresa un número"));
}while(numUno > 5);
