var carro = 71.3
console.log(`A velocidade do seu carro é ${carro}`)

if (isNaN(carro)){ // If puro é uma condição simples
    console.log("Erro!")
}
else{ //If com else é uma condição complexa
if (carro>70) {
    console.log("Você recebeu uma multa!")
} else { 
        if (carro>=60 && carro <= 70){
    console.log("Tenha cuidado, você está se aproximando do limite de velocidade!")
}
else{ //Velocidade do carro < 60
    console.log("Sua velocidade é permitida")
}
}
}