
var btn = document.getElementById("verf")

btn.addEventListener('click',contagem)

function contagem () {

    
    var iInicio = document.getElementById("inc"); //É preciso colocar dentro de uma função para sempre atualizar o valor do inp

    var inicio = Number(iInicio.value)

    var iFim = document.getElementById("fim");

    var fim = Number(iFim.value);  

    var Ipass = document.getElementById("passo") 

    var passo = Number(Ipass.value);

    var resultado = document.getElementById("resultado")
    
    
    if (iInicio.value.length == 0 || iFim.value.length == 0 || Ipass == 0){ // Se não houver dados:
        alert("Faltam dados!");
        resultado.innerHTML = `Impossível contar!`
    }
    else{
        if(passo == 0){
            alert(`Impossível "passo" ser igual a 0, redefinindo para 1`)
            passo = 1
    }
        resultado.innerHTML= `Contando: <br>`

        if(inicio>fim){
            for(var contador = inicio; contador >= fim; contador -= passo){
                resultado.innerHTML += `${contador} &#128073`
            }
        }
        else{
            for(var contador = inicio; contador<= fim;contador+=passo){
                resultado.innerHTML += `${contador} &#128073;`
            }
        }
            resultado.innerHTML += `&#9940`
    
}}

var btnreset = document.getElementById("rst")

btnreset.addEventListener('click', reset)

function reset(){
    var iInicio = document.getElementById("inc");
    var iFim = document.getElementById("fim");
    var Ipass = document.getElementById("passo")

    var resultado = document.getElementById("resultado")


    Ipass.value = ""
    iFim.value =""
    iInicio.value = ""

    resultado.innerHTML = ""
}