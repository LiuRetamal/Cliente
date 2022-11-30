//Clase Empleado que hereda de persona,
//Campo salario y metodo infoEmpleado
//Mas info persona

class Empleado extends Persona{
    //Constructor con misma palabra
    //constructor de Empleado más constructor de persona

    constructor(nombre, apellidos, edad, salario){
        super(nombre, apellidos, edad); //Heredar de la Clase Persona (clase Padre)
        this._salario = salario;
    }

    //Get y Set de Empleado
    get salario(){
        return this._salario;
    }
    set salario(s){
        this._salario = s;
    }

    //Metodo para informacion de Persona y Empleado
    infoEmpleado() {
        //Opcion larga
        //return this.nombre + " " +this.apellidos + ", " +this.edad ", "+this.salario; 
            //LLamar al get //Con barra baja _ llamas a los atributos

        return this.infoPersona() + ", " + this.salario;
    }
}