function cuentaPronombres(palabras){ //parametro pq hay un array
    let resp = 0;
    const pronom = ["yo", "tu", "el" ,"ella","nosotros", "vosotros", "ellos" ,"ellas"];
    
    for (var i = 0; i < palabras.length; i++) {
        if (pronom.indexOf(palabras[i]) !== -1) {
           resp += 1
        }
    }
    return resp;
}

cuentaPronombres(["tu","tienes","razon","yo","estaba","equivocado"]);
cuentaPronombres(["yo","tu","el"]);