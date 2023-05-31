 var imc = peso / (altura * altura);
var x = new Date()

document.getElementById("mostrador").innerHTML = x.getDate()+"/"+x.getMonth()+"/"+x.getFullYear()+" - "+x.getHours()+":"+x.getMinutes();

function calc( massa, altura){
   
    return massa / (altura * altura);

}

function getData(){

    let formmassa = document.getElementById("Peso").value;
    let formaltura = document.getElementById("Altura").value;
    let imc = calc(formmassa, formaltura);
    document.getElementById("resultado").innerHTML = `IMC = ${imc.toFixed(2)}`

}

