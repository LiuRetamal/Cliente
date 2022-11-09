function campoNoVacio(){
    /* MANERA LARGA 
    if (document.getElementById("nombre").value.length==0){
        return false;
    }
    return true;
    */ 
    /* MANERA CORTA
    let resultado = document.getElementById("nombre").value.length==0?false:true;
    return resultado;
    */
   /*return document.getElementById("nombre").value.length==0?false:true;*/

   let nom = document.getElementById("nombre").value;
   let edad = document.getElementById("edad").value;
   
   longNomb = nom.length;
   if(longNomb == 0){
    return false;
   }

   let patron="\b[0-9]+\b"; /*Caracter entre 0 y 9*/
   if(!patron.test(edad)){
    return false;
   }
   return false;
    
}