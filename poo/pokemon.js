//El nombre de la clase debe de ir en mayusculas, palabra reservada Class
class Pokemon{
    name = "";
    type = "";
    evo = [];
    constructor(name, type, evolutions){
        this.name = name;
        this.type = type;
        this.evo = evolutions;
    }
    attack (){
        return `${this.name}, esta atacando`;
    }
    evolve(evolution = 0){
        //Valida que la opción eista
        const EVOLVE = this.evo[evolution] || "";
        let message = "No puedo evolucionar";
        if(EVOLVE){
            message =  `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
}
const charmander = new Pokemon("Charmander", "Fire", ["Charmeleon", "Charizar"]);
const squirtle = new Pokemon("Squirtle", "Water", ["Wartortle", "Blastoise"]);

console.log(`${charmander.name} es de tipo ${charmander.type}`);
console.log(charmander.attack());
console.log(charmander.evolve(0));
console.log(`${charmander.name}`)
console.log("---------------------------------------------------");

console.log(`${squirtle.name} es de tipo ${charmander.type}`);
console.log(squirtle.attack());
console.log(squirtle.evolve(0));