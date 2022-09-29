//Ejercicio 1
//Separar las letras en líneas de una frase de entrada.


function ejer1(){
    //Recuperar texto del input
   let texto = document.getElementById('cadena').value; //los input tienen .value
   let salida = "";
   //Recorrer texto con un for
    //por cada letra poner <br>
    for (var i = 0; i < texto.length; i++) {
        salida += texto[i] + "<br>";
    }   
   //Texto obtenido meter en p con el id ejer1
   document.getElementById("pEjer1").innerHTML=salida;
   
}
//Ejercicio 2
//Contar las letras de una frase.
function ejer2(){
    //Recuperar texto del input
   let texto = document.getElementById('cadena').value; //los input tienen .value
   let salida = texto.length;
   //Recorrer texto con un for
    //por cada letra poner <br>
    
   //Texto obtenido meter en p con el id ejer1
   document.getElementById("pEjer2").innerHTML=salida;
}

//Ejercicio 3
//Dar la vuelta a una frase.
function ejer3(){

    let texto = document.getElementById('cadena').value; //los input tienen .value   
    let salida = "";
   //Recorrer texto con un for
    
    for (var i = texto.length-1; i >= 0; i--) {
        salida += texto[i];
    }  
   //Texto obtenido meter en p con el id ejer1
   document.getElementById("pEjer3").innerHTML=salida;
   
  
}

//Ejercicio 4
//Buscar una palabra dentro de una frase.
function ejer4(){
    let texto = document.getElementById('cadena').value; //los input tienen .value   
    let palabra = document.getElementById('palBuscar').value;
    let salida = "";
   
    texto= texto.toLowerCase();
    palabra= palabra.toLowerCase();
    
    salida= texto.search(palabra);
            
        if(salida == -1){
            salida= "La palabra que buscas NO ESTA";
        }else{
            salida="¡Encontrada!";
        }
    
   //Texto obtenido meter en p con el id ejer4
   document.getElementById("pEjer4").innerHTML=salida;

}

//Ejercicio 5
//Contar las veces que aparece una letra dentro de una frase.
function ejer5(){
     // Capturas el valor del input, lo limpas de espacios al inicio y al finalz.
    let texto = document.getElementById('cadena').value.trim().toLowerCase().split(''); //los input tienen .value 
   
    // Creamos un objeto que será el que almacene las repeticiones
    const repeticiones = {};
    
    // Ciclamos el texto del input y verificamos si existe y sumamos 1, de no existir siempre valdrá 1
    texto.forEach( ( letra ) => {
      repeticiones[ letra ] = ( repeticiones[ letra ] || 0 ) + 1;
    });
    
    // Ahora ciclamos el objeto y lo agregamos al resultado
    for( let letra in repeticiones ) {
      const text = `${ letra } = ${ repeticiones[ letra ] }<br>`;
      document.getElementById('pEjer5').innerHTML += text; //Texto obtenido meter en p con el id ejer5
  
    }  

}

//Ejercicio 6
//Contar todas las veces que aparecen las vocales en una frase por separado
function ejer6(){

    let texto = document.getElementById('cadena').value; //los input tienen .value   
    let salida = 0;
   //Recorrer texto con un for
    const vocales = "aáeéiíoóuú";
    
    // Ahora ciclamos el objeto y lo agregamos al resultado
    for(var i = 0; i < texto.length ; i++) {
       
        if (vocales.indexOf(texto[i]) !== -1) {
           salida += 1;
        }
        
    }
    
}

//Ejercicio 7
//Dividir una frase en palabras
function ejer7(){

    let texto = document.getElementById('cadena').value; //los input tienen .value  
    let divi = texto.trim().split(' '); //Dividir texto
    let salida = "";
    //Recorrer for para separarlo en frases
    for (var i = 0; i < divi.length; i++) {
        salida += divi[i] + "<br>";
    }  
    
    //Texto obtenido meter en p con el id ejer7
    document.getElementById("pEjer7").innerHTML=salida;
 
}
//Ejercicio 8
//Dar la vuelta a las palabras de una frase.
function ejer8(){

    let texto = document.getElementById('cadena').value; //los input tienen .value 
    /*
    let divi = texto.split(' '); //Dividir texto  
    let salida = "";

    for (var i = texto.length-1; i < divi.length; i--) {
        salida += divi[i] + "<br>";
    } 
    */
    let salida = texto.split(" ").reverse( ).join(" ").split(" ").reverse().join(" ");

    document.getElementById("pEjer8").innerHTML=salida;

}

