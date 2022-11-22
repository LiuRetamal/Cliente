/*Ejercicio BIEN*/
function validaTexto(){
     //Validar que el texto tiene entre 8 y 10 caracteres

     let resp = true;
     let texto = document.getElementById("texto").value;

     if(texto.length < 8 || texto.length > 10){
          alert("El texto no tiene entre 8 y 10 caracteres");
          resp = false;
     } 
     //Validar que empieza por "123"
     //if(texto[0]!="1" || texto[0]!="2" || texto[0]!="3")

     if(texto.substring(0,3)!=="123"){
          alert("El texto no empieza por 123");
          resp = false;
     }
     return resp;
}


/* EJERCICIO MAL 
function validaTexto(){
    
   let texto = document.getElementById("texto").value; //variable para guardar el texto introducido
   
   longText = str.length(texto);
   if(longText == 0){
        texto=alert("Error")
   }

   let patron="\b[123]+[a-z]+[8-10]\b"; //empieza por 123, caracteres de la A a la Z, entre 8 y 10 caracteres
   if(!patron.test(texto)){
        texto=alert("Error")
   }
   
}*/