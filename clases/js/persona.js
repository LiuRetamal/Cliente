//Clase Persona exportada para usarse en otros Ficheros ".js"
class Persona{
    //Constructor con misma palabra
    //constructor persona crea 3 atributos

    constructor(nombre, apellidos, edad){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }
    //Get y Set
    //Nombre
    get nombre(){
        return this._nombre;
    }
    set nombre(n){
        this._nombre = n;
    }
    //Apellidos
    get apellidos(){
        return this._apellidos;
    }
    set apellidos(a){
        this._apellidos = a;
    }
    //Edad
    get edad(){
        return this._edad;
    }
    set edad(e){
        this._edad = e;
    }
    //Tiene un metodo que devuelve el nombre completo
    infoPersona(){
        //Se llama a los get
        return this.nombre + " " +this.apellidos + ", " +this.edad;
    }
    
}


