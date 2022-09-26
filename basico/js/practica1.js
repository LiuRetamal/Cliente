onload=principal;

//Asignar funcion al boton "cambiar"
function principal() {
	document.getElementById('boton1').onclick=cambia;
	document.getElementById('boton2').onclick=vuelve;
}
	//Cambia todos los parrafos
function cambia() {
	console.log("Estoy en cambia");
	parrafos = document.getElementsByTagName('p');

	for (parr of parrafos){
		parr.innerHTML="Cambiado";
	}
}
	//Cambia los parrafos a la version anterior
function vuelve() {
	console.log("Estoy en vuelve");
	parrafos = document.getElementsByTagName('p');

	for (parr of parrafos){
		parr.innerHTML="Esto es un parrafito";
	}
}
//slash slash

