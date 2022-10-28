let parcial = "";
let oprealizada = document.getElementById('operacion_realizada')
let resultado = document.getElementById('txt_resultado')
let opseleccionado = "";
let numero = "";
let ultimoDigitoPresionado = "";
let arraymemoria =[]

function operador(num){ 
    if(ultimoDigitoPresionado === 'igual'){
        ultimoDigitoPresionado = 'numero'
         parcial = ""
         console.log(numero)
         console.log(parcial)
        numero = numero + num;
        parcial = parcial + num
        resultado.innerHTML = numero;}

        else {
            ultimoDigitoPresionado === 'numero'
            numero = numero + num;
    arraymemoria.push(num)
    
    parcial = parcial + num
    resultado.innerHTML = numero;
    console.log(numero)
         console.log(parcial)

        }
        
    
    
    
    if(numero===0 && opseleccionado === "/"){
        limpiar();
        resultado.innerHTML = "Undefined"
        return;
    }
    ultimoDigitoPresionado = 'numero'
    
}
function operacion(oper){
    if(oper==="."){}
    if (ultimoDigitoPresionado ==='operacion'){
        opseleccionado = oper;
        parcial = (parcial.slice(0,-1)) + oper;
    numero = "";
    oprealizada.innerHTML = oper;
    ultimoDigitoPresionado = 'operacion'

    } else {
        opseleccionado = oper;
    parcial = parcial + oper;
    numero = "";
    oprealizada.innerHTML = oper;
    ultimoDigitoPresionado = 'operacion'

    }
    ultimoDigitoPresionado = 'operacion'
    console.log(numero)
         console.log(parcial)
}
function calculo (){
    parcial = eval(parcial)
    //resultado.innerHTML=parcial
    //parcial = parcial.toString()
    numero= "";
    resultado.innerHTML=parcial
    oprealizada.innerHTML = "";
    ultimoDigitoPresionado = 'igual'
    console.log(numero)
    console.log(parcial)
    console.log(typeof(parcial))
    parcial = parcial.toString()
}
function limpiar(){
    //opseleccionado = "";
    //parcial = "";
    if(ultimoDigitoPresionado === 'igual'){
        numero = numero.slice(0,-1);
        parcial = parcial.slice(0,-1);
        resultado.innerHTML= parcial
    }
        else {
            numero = numero.slice(0,-1);
            parcial = parcial.slice(0,-1);
            resultado.innerHTML= numero
            oprealizada.innerHTML = 0;

        }
        
    console.log(numero)
    console.log(typeof(parcial))
}

