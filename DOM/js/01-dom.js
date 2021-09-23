document.write("Hola desde JS");
//Obtener los nombres de las etiquetas con las que se cuenta
const title = document.getElementsByTagName("h1");
//Modificación del texto del primer elemento
title[0].innerHTML = "Titulo cambiado dese Js con elementsBy tag";
/* Obtener el elemento por ById */
const text = document.getElementById("h1-texto")
text.innerHTML = "Este texto es desde JS version dos con ID";
text.style.color = "white";
text.style.background = "blue"
console.log(text);
console.log(title);

const textDos = document.querySelector("#text");
textDos.textContent = "Texto desde js con querry"

/* Obtiene un elemento por id 
    getElementById
*/
/* Obtiene todo los elemetnos de una clase y devuelve un arreglo
    getElementsByClassName
 */
/* 
    Obtiene todo los elementos por nombre y devuelve un arreglo
    getElementsByName
*/

/* Crear elementos con JS */
const div = document.createElement("div");
/* Elemento para la creación y modificación de un elemento desde JS*/
const hDos = document.createElement("h2");
hDos.textContent = "Elemento creado y modificado por JS";
const body = document.querySelector("body");
body.append(div);
body.append(hDos);