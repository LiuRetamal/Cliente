//-----------------------------------------------------------------------------------------//

function fecha(){

    //Variables para mostrar los años, meses y dias
    let año = document.getElementById("s1");
    let mes = document.getElementById("s2");
    let dia = document.getElementById("s3");

    //Obtener datos de las fechas en los inputs. 
    //Te lo devuelve en string
    let fecha1 = document.getElementById("fecha1").value;
    let fecha2 = document.getElementById("fecha2").value;

    //Variables para convertirlo en objeto
    let f1 = new Date(fecha1);
    let f2 = new Date(fecha2);

    //Variable para convertirlo en milisegundos
    let ms;

    //Condiciones para hacer restas segun que fecha sea menor 
    if (f1 > f2){
        ms = f1 - f2;
    }else if (f2 > f1){
        ms = f2 - f1;
    }
    
    let añosMs = ms/1000/60/60/24/30/12; //Te lo devuelve con decimales
    año.innerHTML = Math.floor(añosMs); //Math.floor redondea a la baja

    let mesMs = ms/1000/60/60/24/30; //milisegundos, segundos, minutos, horas, dias, mes, año
    mes.innerHTML = Math.floor(mesMs); 

    let diasMs = ms/1000/60/60/24;
    dia.innerHTML = Math.floor(diasMs);
}

