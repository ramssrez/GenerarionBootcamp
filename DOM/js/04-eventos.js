/* Referencia al html con el $ */
let $btn = document.querySelector("#btn");
let $inputId = document.querySelector("#inputId");
let $h1 = document.querySelector("#h1Id");
console.log(typeof($btn));
/* Uso de eventos al momento de realizar la presion al boton */
$btn.addEventListener("click", () =>{
    console.log("Presionaste un boton");
});
$btn.addEventListener("mouseout", () =>{
    console.log("Esta encima");
});

$inputId.addEventListener("keypress",(e)=>{
    //console.log("Estas escribiendo keypress");
    $h1.textContent = e.target.value;
});

$inputId.addEventListener("keydown",(e)=>{
    console.log(e.target.value);
});