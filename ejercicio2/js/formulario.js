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
   
}