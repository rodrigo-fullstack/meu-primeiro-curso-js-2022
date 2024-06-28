
var btn = document.getElementById("verf")
var inpano = document.getElementById("ano")
var form = document.getElementById("form")

btn.addEventListener('click',function (event){
    event.preventDefault()
    console.log(form.radio.value)
    console.log(ano.value)
});

function verificar(){
    var resultado = document.querySelector('#result')

    var img = document.querySelector("#img")

    var nasc = inpano.value
    var agora = new Date();
    var anoAtual = agora.getFullYear();
    var idade = anoAtual - nasc
    console.log (idade)

    var sex = form.radio.value

    resultado.style.opacity = "100%"

    if (sex == "" || isNaN(idade) || idade == "" || idade > 130 || idade <0){
        resultado.innerHTML = "Inválido"
        img.src = ""
    }
    else {
        resultado.innerHTML = `Você é do sexo ${sex}. <br>`
        if(idade < 4){
            resultado.innerHTML += `Você é um bebê de ${idade} anos.`
            img.src = "bebe.jpg"
        }
        else if (idade>4 && idade<12){
            resultado.innerHTML += `Você é uma criança de ${idade} anos.`
            if(sex == "masculino") {
                img.src="criança m.jpg"
                
            } else{
                img.src="criança f.jpg"
            }
        }
        else if (idade>12 && idade<18){
            resultado.innerHTML += `Você é um adolescente de ${idade} anos.`
            if(sex == "masculino") {
                img.src="adolescente m.jpg"
                
            } else{
            
                img.src="adolescente f.jpg"
            }
        }
        else if (idade > 18 && idade < 30){
            resultado.innerHTML += `Você é um jovem adulto de ${idade} anos.`
            if(sex == "masculino") {
                img.src="j adulto m.jpg"
                
            } else{
                img.src="j adulto f.jpg"
            }
        }
        else if (idade >30 && idade <59){
            resultado.innerHTML += `Você é um adulto de ${idade} anos.`
            if(sex == "masculino") {
                img.src="adulto m.jpg"
                
            } else{
                img.src="adulto f.jpg"
            }
        }
        else if (idade>=59 && idade <130){
            resultado.innerHTML += `Você é um idoso de ${idade} anos.`
            if(sex == "masculino") {
                img.src="idoso m.jpg"
                
            } else{
                img.src="idoso f.jpg"
            }
        }
    }
}
/*
Códigos adicionais

imagem = document.createElement("img")
imagem.setAtribbute("id", "foto")

*/ 