
function crearTr(){
    
    const contenedor = document.getElementById("resultado");
 
    const tabla = document.createElement("table");
 
    let tr = document.createElement("tr");
 
    let th = document.createElement("th");
    let thText = document.createTextNode("Columna 1");
    th.appendChild(thText);
    tr.appendChild(th);
 
    th = document.createElement("th");
    thText = document.createTextNode("Columna 2");
    th.appendChild(thText);
    tr.appendChild(th);
 
    tabla.appendChild(tr);
    tr = document.createElement("tr");
 
    td = document.createElement("td");
    tdText = document.createTextNode("Valor 1");
    td.appendChild(tdText);
    tr.appendChild(td);
 
    td = document.createElement("td");
    tdText = document.createTextNode("Valor 2");
    td.appendChild(tdText);
    tr.appendChild(td);
    tabla.appendChild(tr);
    
    tr = document.createElement("tr");
 
    td = document.createElement("td");
    tdText = document.createTextNode("Valor 1");
    td.appendChild(tdText);
    tr.appendChild(td);
 
    td = document.createElement("td");
    tdText = document.createTextNode("Valor 2");
    td.appendChild(tdText);
    tr.appendChild(td);
    tabla.appendChild(tr);
 
    contenedor.appendChild(tabla);
}