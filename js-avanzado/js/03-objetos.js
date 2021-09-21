//Uso de objetos en JS
//Desclaración del objeto Persona
const persona = {
    //Clave/atributos : valor
    nombre : "Julian",
    apellidos : "Sanchez Pérez",
    correo: "julianS@ejemplo.com"
}
document.write(persona.nombre);
//Estructura tipo JSON para el envio de datos desde el backend
//JSON = Java Script Objet Notation
const articulos = [
    {
        id : 1,
        nombre : "Alimento para perros",
        precio : 30.50
    },
    {
        id:2,
        nombre : "Alimento para gatos",
        precio : 60.25
    },
    {
        id : 3,
        nombre : "Alimento para aves",
        precio : 40.75
    }
]
//Impresion del atributo de nombre del objeto número uno
document.write(articulos[1].nombre);