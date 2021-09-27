console.log("la consola esta activa")

document.addEventListener("DOMcontentLoaded", function(){
    M.AutoInit();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems);
  });


const contenido = document.querySelector("#contenido")
const btnAbout = document.querySelector("#btnAbout")
const btnExperiencia = document.querySelector("#btnExperiencia")
const btnEducacion = document.querySelector("#btnEducacion")


btnAbout.addEventListener("click", function(){
    debugger
    contenido.innerHTML = contenidoAbout()
})

btnExperiencia.addEventListener("click", function(){
    contenido.innerHTML = contenidoExperiencia()
})

btnEducacion.addEventListener("click", function(){
    contenido.innerHTML = contenidoEducacion()
})

