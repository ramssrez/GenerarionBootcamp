/* Try nos permite ejecutar código propenso a fallar  de una manera segura*/
const gravedad = 9.8;
console.log(gravedad);
/* Intenta ejecutar el codigo, si hay un error ejecut el catch */
try{
    gravedad = 10.1; 
}catch(e){
    /* El catch se ejecuta si hay un error, recibe como primer parametro el error*/
    console.log(e);
}finally{
    /* Finlly siempre se ejecuta */
    console.log("Soy el finally")
}
 console.log(gravedad);
