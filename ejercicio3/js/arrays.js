onload=sonPares;

function sonPares(){
    numeros=[4,3,5,6 ]
    while (numeros != 0){
        for (num of numeros){
            par = num %2;
            if(par == 0){
                numeros=true
            }else{
                numeros=false
            }
        }
        
    }
    
}