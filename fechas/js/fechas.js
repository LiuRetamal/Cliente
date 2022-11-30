//Devuelve String
console.log(Date()); //String Wed Nov 23 2022 09:21:27 GMT+0100 (hora estándar de Europa central)

let fecha = new Date();
//Devuelve objeto con la fecha actual
console.log(fecha); //Objeto Wed Nov 23 2022 09:21:27 GMT+0100 (hora estándar de Europa central)

//Devuelve ms que han pasado desde 1-1-1970
console.log(Date.now()); //1669191687856

//Consegir milisegundos de fecha Nacimiento hasta fecha actual
let fechaNacimiento = new Date(2000, 0, 26);
let fechaActual = new Date(); //Date() te devuelve la fecha actual en ms

console.log(fechaNacimiento.getMilliseconds()); //0
console.log(fechaActual.getMilliseconds()); //856

console.log(fechaActual-fechaNacimiento); //720350487856


//--------------------------------------------------------------//
//EJERCICIOS FECHAS//

//-----------------//
//Write a JavaScript function to check whether an `input` is a date object or not
let is_date = function(input){
    if(Object.prototype.toString.call(input) == "[object Date]")
        return true;
    return false;
};


console.log(is_date("October 13, 2014 11:13:00")); //false
console.log(is_date(new Date(86400000))); //true
console.log(is_date(new Date(99,5,24,11,33,30,0))); //true
console.log(is_date([1, 2, 4, 0])); //false


//-----------------//
//Write a JavaScript function to get the current date.
let curday = function(s){
    let f = new Date();
    return f.getFullYear()+s+(f.getMonth()+1)+s+f.getDay();
};
console.log(curday('/')); //2022/11/3
console.log(curday('-')); //2022-11-3
console.log(curday('"')); //2022"11"3


//----------------//
//Write a JavaScript function to get the number of days in a month
let getDaysInMonth = function(mm, yy){
    //0 Enero, 1 Febrero - 11 Diciembre
    return new Date(yy, mm, 0).getDate();
    
};
console.log(getDaysInMonth(11, 2022)); //31 dias
console.log(getDaysInMonth(2, 2024)); //29 dias
console.log(getDaysInMonth(9, 2022)); //30 dias
console.log(getDaysInMonth(12, 2022)); //31 dias


//----------------//
//Write a JavaScript function to get the month name from a particular date.
let month_name = function(f){
    //Devuelve mes con palabra entera
    const options = {month: 'long'};
    return f.toLocaleDateString(undefined, options);
    //Devuelve mes con palabra corta
    return f.toString().split(" ")[1]; //0-DiaSemana //1-Mes //2-Dia //3-Año //4-Hora
    
};
console.log(month_name(new Date("10/11/2009")));//Oct
console.log(month_name(new Date("11/13/2014")));//Nov

//----------------//
//Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).
let compare_dates = function(f1, f2){

   if (f1.getTime() == f2.getTime()){
        return "f1 es igual que f2"
   }else if(f1.getTime() > f2.getTime()){
        return "f1 es mayor que f2"
   }else if(f1.getTime() < f2.getTime()){
        return "f1 es menor que f2"
   }    
};

console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); //1 Igual que 2
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); //1 Mayor que 2  
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); //1 Menor que 2

