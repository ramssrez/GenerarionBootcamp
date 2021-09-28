let $btn = document.querySelector("#btn_cat");
let $divCats = document.querySelector("#cats");
$btn.addEventListener("click", () =>{
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        /* Destructuracion */
        const [cat]= data;
        //const cat = data[0];
        console.log(cat); 
        let imaCat =document.createElement("img");
        imaCat.src = data[0].url;
        /* document.body.append(imaCat); */
        $divCats.appendChild(imaCat);
    });
});