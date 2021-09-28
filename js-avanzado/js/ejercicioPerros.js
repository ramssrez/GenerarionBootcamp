let $btn = document.querySelector("#btn_dog");
let $divDogs = document.querySelector("#dogs");
$btn.addEventListener("click", () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        console.log(data.message);
        console.log(data.status);
        let imaDog =document.createElement("img");
        imaDog.src = data.message;
        $divDogs.appendChild(imaDog);
    });
});