document.addEventListener('DOMContentLoaded', function(){
    autoplay();
});
let boton = document.querySelector(".reproductor");
let etiquetaAudio = document.createElement("audio");
etiquetaAudio.setAttribute("src", "musica/fondo1.mp3");

boton.addEventListener("click", () => {
  etiquetaAudio.play();
})

function autoplay(){
    etiquetaAudio.play();
}