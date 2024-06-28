var agora = new Date() //Para pegar informações do sistema, por exemplo, as horas
var hora = Number.parseFloat(agora.getHours ())
console.log(`Agora são ${hora} horas`)
if (hora<0 ||hora>23){
    console.log("Não existe esse horário")
}
else if( hora<6 || hora>=18){
    console.log("Boa noite!");
}
else{
    if(hora>=6 && hora <12) {
        console.log("Bom dia!")
    }
    else if (hora>=12 && hora <18){
        console.log("Boa tarde!")
    }

    }    

