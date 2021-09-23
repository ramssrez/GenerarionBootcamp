const nameJs = document.querySelector("#name");
const input = document.querySelector("#input-form");
console.log(input.value);
console.log(input);

const writeName= () => {
    //Manera en como se extrae información del input
    const inputValue = input.value;
    nameJs.textContent = inputValue;
}