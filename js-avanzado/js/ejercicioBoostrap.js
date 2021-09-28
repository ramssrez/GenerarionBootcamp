let $divpadre  = document.querySelector("#padre");
let arreglo = [];
api();
//console.log(arreglo.length)
function api(){
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then(resp => resp.json())
    .then(data => {
        //console.log(data);
        for(let i=0; i<data.length; i++){
            //console.log(data[i]);
            arreglo[i] = data[i];
        }
    });
}

function creaElemento(){
    let carta =document.createElement("img");
}
