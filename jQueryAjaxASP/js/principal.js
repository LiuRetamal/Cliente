//se almacena los elementos del input
let el = $("#EquipLocal")
let ev = $("#EquipVisitante")
let gl = $("#GolesLocal")
let gv = $("#GolesVisitante")
//-------------------------------------------------
$("#btnER").click(registroPartido);
$("#btnMR").click(modificaPartido);
$("#btnDL").click(borraPartido);
$("#btnLF").click(limpiaPartido);

function cargaInicial(){
    $.post("py/datosPartidos.py",{},iniciarTabla);
}

function iniciarTabla(data,status){
    if(status == "success"){
        //meter datos de un JSON en data en la tabla
        let datosPartidos = JSON.parse(data);
        for (dp of datosPartidos) {
            creaFila(dp.EquipLocal,dp.EquipVisitante,dp.GolesLocal,dp.GolesVisitante)
        }
    }else{
        alert("Error al recuperar los partidos")
    }
}

function registroPartido(){
    if(validarDatos){
        $.post("py/inserta.py",
        {
            EquipLocal: el.val(),
            EquipVisitante:ev.val(),
            GolesLocal: gl.val(),
            GolesVisitante: gv.val(),
        }
        ,respuesta)
    }else{
        alert("Error en datos");
    }
}

function respuesta(data, status){
    if(status == "success"){
        creaFila(0,el.val(),ev.val(),gl.val(),gv.val());
    }
}

function creaFila(fila,elp,evp,glp,gvp){
    $("#tablaCuerpo").append(
        `<tr ondbclick="rellenaFormulario()" id="fila_${fila}"><td>${elp}</td><td>${evp}</td><td>${glp}</td><td>${gvp}</td></tr>`
    )
}

//Comprobar goles enteros positivos. Nombre de equipos tienen datos
function validarDatos(){
    
    return true;
}
cargaInicial();

function rellenaFormulario(){
    regActivo = $(this.event.target).parent().attr("fila")
    console.log(regActivo)
    let celda = $(this.event.target).parent().children().first()
    el.val(celda.html());
    ev.val(celda.next().html());
    gl.val(celda.next().next().html());
    gv.val(celda.next().next().next().html());

    $("#btnER").prop("disabled", true);
    $("#btnMR").prop("disabled", false);
    $("#btnDL").prop("disabled", false);
}

function modificaPartido(){

}
function borraPartido(){
    $("#btnDL").prop("disabled", true);
    el.val("");
    ev.val("");
    gl.val("");
    gv.val("");
}
function limpiaPartido(){
    
}