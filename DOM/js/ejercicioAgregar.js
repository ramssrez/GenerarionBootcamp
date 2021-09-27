/* Colocar una lista en el documento HTML,
    colocar un boton que diga agregar elemento.
    Cada ves que le den clic al boton debe agregar un elemento
    a la lista.
 */
let $btn = document.querySelector("#btn");
let $list = document.querySelector("#list");
let contador = 0;
$btn.addEventListener("click", () =>{
    let div = document.createElement("div");
    //Creación del elemento li
    let listItem = document.createElement("li");
    listItem.textContent = `Nuevo elemento ${contador+1}`;
    $list.appendChild(listItem);
    div.textContent = `Ejemplo: ${contador+1}`;
    document.body.appendChild(div);
    contador++;
});