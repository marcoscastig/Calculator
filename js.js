let parcial = "";
let oprealizada =document.getElementById('operacion_realizada')
let resultado = document.getElementById('txt_resultado')
let opseleccionado = "";
let numero = "";

function operador(num){
    numero = numero +num;
    parcial = parcial + num;
    oprealizada.innerHTML = parcial;
    if(numero===0 && opseleccionado === "/"){
        limpiar();
        resultado.innerHTML = "Undefined"
        return;
    }
}
function operacion(oper){
    opseleccionado = oper;
    parcial = parcial + oper;
    numero = "";
    oprealizada.innerHTML = parcial;
}
function calculo (){
    parcial = eval(parcial)
    resultado.innerHTML=parcial
    parcial = parcial.toString()
    numero= "";
    oprealizada.innerHTML=parcial
}
function limpiar(){
    opseleccionado = "";
    parcial = "";
    resultado.innerHTML="";
    numero = "";
    oprealizada.innerHTML = 0;
}