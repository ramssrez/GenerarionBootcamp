let $btn = document.querySelector("#btn_cat");
let $divCats = document.querySelector("#cats");
$btn.addEventListener("click", async() =>{
    //Seccion de sync/await
    const resp = await fetch("https://api.thecatapi.com/v1/images/search");
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    const imgCat = document.createElement("img");
    imgCat.src = data[0].url;
    imgCat.width = "300";
    $divCats.appendChild(imgCat);
});

/*
    
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        const [cat]= data;
        //const cat = data[0];
        console.log(cat); 
        let imaCat =document.createElement("img");
        imaCat.src = data[0].url;
        imaCat.width = "300";

        $divCats.appendChild(imaCat);
    });
*/