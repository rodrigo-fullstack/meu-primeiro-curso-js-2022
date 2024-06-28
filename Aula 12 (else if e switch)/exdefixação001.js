//Notas Estados Unidos
var nota = "F" //S,A,B,C,D,E,F
var nome = "Rodrigo"

if (nota === "" || nota < 1 || nota >=1){
    console.log("Erro!")
}
else{
if (nota === "S"){
    console.log(`Parábens, você foi incrível, ${nome}`)
}
else if (nota === 'A' ){
    console.log(`Você foi ótimo, ${nome}`)
}
else{
    if (nota ==="B")
    {
        console.log(`Você foi bem, ${nome}`)
    }
    else if(nota ==="C"){
        console.log (`Você foi ok, ${nome}`)
    }
    else{
        if(nota === "D"){
            console.log (`Você pode melhorar, ${nome}`)
        }
        else if (nota === "E") {
            console.log(`Você foi mal, ${nome}, mas acredite em seu potencial. Melhore!`)
        }
        else{ if(nota === "F") {
            console.log(`${nome}, você fracassou, mas não desista, dê o maximo de ti e tu vai conseguir!`)
           }  
           else{
            console.log("Essa nota não existe")
           }
        }
    }
}
}