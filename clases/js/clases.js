import Persona from "./persona.js"

const persona1 = new Persona("Jose", "García", "24");
const persona2 = new Persona("Ana", "García", "42");

console.log(persona1.nombreCompleto()+ "-" +persona2.nombreCompleto());