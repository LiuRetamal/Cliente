const persona1 = {
    nombre: "Ana",
    apellidos:"Lopez",
    edad:29,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellidos;
    },
    fecNac: new Date("2002-06-18")
}
const persona2 = {
    nombre: "Juan",
    apellidos:"Garcia",
    edad:5,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellidos;
    },
    fecNac: new Date("1977-08-01")
}
const persona3 = {
    nombre: "Antonio",
    apellidos:"Fernandez",
    edad:45,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellidos;
    },
    fecNac: new Date("2018-10-10")
}
const persona0 = {
    nombre: "Federico",
    apellidos:"Zapico",
    edad:98,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellidos;
    },
    fecNac: new Date("1968-03-27")
}

const listaPersonas = [persona0, persona1, persona2, persona3];

function mostrarObjetos(){
    console.log(persona1.nombre);
    console.log(persona1.apellidos);
    console.log(persona0.edad);
    console.log(persona0.fecNac);

    persona1.direccion = "calle principal...";
    console.log(persona1.nombrecompleto());

    console.log(persona2["nombre"]);
    console.log(persona2["apellidos"]);
    console.log(persona2["edad"]);
    console.log(persona2.nombrecompleto());

    console.log(listaPersonas);
}

function ordenarListaPersonas(){
   console.log(listaPersonas);
    listaPersonas.sort(function(a, b){return a.edad - b.edad});
    console.log(listaPersonas);

}
function ordenarListaPersonasPorApellidos(){
    listaPersonas.sort(ordenAlfabeticoPorApellidos);
    console.log(listaPersonas);
}
function ordenAlfabeticoPorApellidos (a, b){
    if (a.apellidos < b.apellidos) {return 1;}
    if (a.apellidos > b.apellidos) {return -1;}
    return 0;
}
function ordenarListaPersonasPorFecNac(){
    listaPersonas.sort(ordenPorFecNac);
    console.log(listaPersonas);

}
function ordenPorFecNac(a, b){
    if (a.fecNac < b.fecNac) {return -1;}
    if (a.fecNac > b.fecNac) {return 1;}
    return 0;
}

function personaMayor(){
    listaPersonas.sort(ordenPorFecNac);
    console.log(listaPersonas[0].nombrecompleto());

    /*ordenarListaPersonasPorFecNac();
    document.getElementById("salida") = innerHTML= listaPersonas[0].nombrecompleto();*/
}
function personaMenor(){
    listaPersonas.sort(ordenPorFecNac);
    console.log(listaPersonas[listaPersonas.length-1]);

    /*ordenarListaPersonasPorFecNac();
    document.getElementById("salida") = innerHTML= listaPersonas[listaPersonas.length-1].nombrecompleto();*/
}