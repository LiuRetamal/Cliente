//Clase Persona exportada para usarse en otros Ficheros ".js"
export default class Persona{
    //Constructo con misma palabra
    //constructor persona crea 3 atributos

    constructor(nombre, apellidos, edad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
    //Tinee un metodo que devuelve el nonmbre completo
    nombreCompleto(){
        return this.nombre + " " +this.apellidos;
    }
    
}


