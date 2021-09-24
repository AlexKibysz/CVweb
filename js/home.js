document.addEventListener("DOMcontentLoaded", function(){
    M.AutoInit();
});

const contenido = document.querySelector("#contenido")
const btnAbout = document.querySelector("#btnAbout")
const btnExperiencia = document.querySelector("#btnExperiencia")
const btnEducacion = document.querySelector("#btnEducacion")


btnAbout.addEventListener("click", () => {
    contenido.innerHTML = contenidoAbout()
})

btnExperiencia.addEventListener("click", () => {
    contenido.innerHTML = contenidoExperiencia()
})

btnEducacion.addEventListener("click", () => {
    contenido.innerHTML = contenidoEducacion()
})