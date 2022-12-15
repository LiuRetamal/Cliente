let colorAnterior
function arrastrando(event){
    event.dataTransfer.setData('text/plain', event.target.id);
    colorAnterior = event.currentTarget.style.backgroundColor;
    event.currentTarget.style.backgroundColor = 'red';
}
function llego(event){
    event.preventDefault();
    console.log("llego");
}
function solto(event){
    console.log("solto");
    const id = event.dataTransfer.getData('text');
    console.log("id div arrastrado: "+id);
    console.log("id div destino: "+event.target.id);

    const elementoArrastrado = document.getElementById(id);
    const destino = event.target;

    destino.appendChild(elementoArrastrado);

}
function finArrastre(event){
    event.currentTarget.style.backgroundColor = colorAnterior;
}


 
