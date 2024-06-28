function carregar(){
var msg = document.getElementById("txt")
var img = document.getElementById("inner-img")
var data = new Date()
var hora = data.getHours()
var body = document.body

msg.innerHTML = `Agora são ${hora} horas. <br>` //Digita as horas
if (hora >6 && hora <=12)
{
msg.innerHTML += `Bom dia!`
img.src = "Manhã.jpg"
body.style.background = "#9E2C10"
}
else if (hora>=12 && hora<18)
{
msg.innerHTML += "Boa tarde!" // Muda o texto
img.src = "Tarde.jpg" //Muda a imagem
body.style.background = "#6F8EF0" //Muda o fundo
}

else if (hora>18 && hora <= 23 || hora>0 && hora<6)
{
img.src = "Noite.jpg"
msg.innerHTML += "Boa noite!"
body.style.background = "#1B1B52"
}
}
