/* Fetch nos permitwe hacer peticiones http desde javaScript */
/* JSON = JavaScriot Object  */
let peticion = fetch("https://jsonplaceholder.typicodecom/posts")
.then(resp => resp.json())
.then(data => {
    console.log(data)
}).catch(e =>{
    console.log(e);
});
console.log(peticion);