function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
 var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    img.src ='./assets/images/manhã.jpg'
    document.body.style.background = '#1eb14a'
}

else if(hora >= 12 && hora < 18){
    img.src = './assets/images/tarde.jpg'
    document.body.style.background ='#f7682fda'
}

else{
    img.src = './assets/images/noite.jpg'
    document.body.style.background = 'purple'
}

}