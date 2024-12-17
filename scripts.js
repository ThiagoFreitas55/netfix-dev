let botonSom = document.querySelector(".botao-som") 
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")
let audio = document.querySelector(".audio")

botonSom.addEventListener("click", ligaSom)

function ligaSom (){
   
    video.muted = !video.muted
}

botao.addEventListener("click", mostramodal)
modal.addEventListener("click", escondermodal)

function mostramodal(){
    modal.style.display = "block"
}

function escondermodal(){
    modal.style.display = "none"
}
window.addEventListener("load", tocaraudio)

function tocaraudio(){
    audio.play()
}
