//El nombre de la clase debe de ir en mayusculas, palabra reservada Class
class Pokemon{
    #name = "";
    #type = "";
    #evo = [];
    constructor(name, type, evolutions){
        this.#name = name;
        this.#type = type;
        this.#evo = evolutions;
    }
    //Generacion de Getters y Setters de la clase
    set name(name){
        this.#name = name;
    }

    set type(type){
        this.#type = type;
    }

    set evolution(evolution){
        this.#evo = evolution;
    }

    get name(){
        return this.#name;
    }

    get type(){
        return this.#type;
    }

    get evolution(){
        return this.#evo
    }

    attack (){
        return `${this.#name}, esta atacando`;
    }
    evolve(evolution = 0){
        //Valida que la opción eista
        const EVOLVE = this.#evo[evolution] || "";
        let message = "No puedo evolucionar";
        if(EVOLVE){
            message =  `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }
}

class TypeFire extends Pokemon{
    constructor(name, evolutions){
        super(name, "Fire", evolutions);
    }
    message(){
        return `Hola soy ${this.name} y soy de tipo fuego`;
    }
}
const charmander = new TypeFire("Charmander", ["Charmeleon", "Charizar"]);
console.log(charmander.message());
charmander.name= "Gato";
console.log(charmander.name);