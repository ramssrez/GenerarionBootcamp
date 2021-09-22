/* 
    EStructurade datos
    const arrelglo= [];
    cons arregloDos = new Array(),
 */
let lenguajes = ["Java","C++","PHP", "Python","C#","JavaScript", "Ruby", "Cobol"];
let arregloDos = new Array();
console.log(lenguajes);
/* Uso de for each */
for(let i = 0; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
}
console.log("Uso de forech");
/* Funcion anonima */
lenguajes.forEach(function(lenguaje, index, valor){
        console.log(lenguaje);
        document.write(`<p>${index}-${lenguaje}</p>`)
    }
);
 document.write("<br/> Otra opción del  forech");
 document.write(`<ul>`)
 lenguajes.forEach(elemento => 
    document.write(`<li>${elemento}</li>`)    
 );
 document.write(`</ul>`);

/* Map, crea un nuevo arreglo con los resultados realizados*/
let numeros = Array(1,2,3,4,5,6,7,8,9,89,21,97,1);
let numerosDos = numeros.map(function(numero){
    return numero*2;
});
console.log(numeros);
console.log(numerosDos);

/* Includes determinar si un arreglo contiene un valor dado de tipo boolean*/
console.log(lenguajes.includes("java"));

/* Filter, cra un nuevo arreglo con todos los elementos que cumplan con la condición*/
let filtrados = numeros.filter(function(numero){
    if(numero >10){
        return numero;
    }
});
console.log(filtrados);
 
/* Rellenar un arreglos con random */
let arregloEjemplo = [];
for(let i = 0; i<10; i++){
    //Creación de números random y parseo del mismo
    let random = parseInt(Math.random()*(100-1)*1)
    arregloEjemplo[i] = random;
}
console.log(arregloEjemplo);