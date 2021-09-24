let conf = document.querySelector("#confirmacion");
let input = document.querySelector("#input-form");

let writeAge= () => {
    let inputValue = input.value;
    if(parseInt(inputValue) >= 18){
        conf.textContent = "Eres mayor de edad";
    }else if(parseInt(inputValue) <= 0){
        conf.textContent = "Eso es imposible, no puedes tener 0  o edades negativas" ;
    }else{
        conf.textContent = "Eres menor de edad";       
    }

}