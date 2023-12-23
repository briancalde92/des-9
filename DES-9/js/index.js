function obtenerNombrePersonaje() {
let cajaBoton = document.getElementById("cajaBoton");

 cajaBoton.addEventListener("click", function () {
    cajaBoton.style.visibility = "hidden"; 
//Punto 1
let nombre = prompt ("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
 console.log(`El personaje seleccionado es ${nombre}`);
 
//Punto 2
let spanNombre = document.getElementById("nombrePersonaje");

switch (nombre.toLowerCase()) {
    case "mario":
        spanNombre.textContent = "Mario";
        break;
    case "luigi":
        spanNombre.textContent = "Luigi";
        break;
    case "bowser":
        spanNombre.textContent = "Bowser Morton Koopa";
        break;
    case "peach":
        spanNombre.textContent = "Princesa Peach Toadstool";
        break;
    case "yoshi":
        spanNombre.textContent = "T. Yoshisaur Munchakoopas";
        break;
    case "toad":
        spanNombre.textContent = "Toad";
        break;
    case "toadette":
        spanNombre.textContent = "Toadette";
        break;
    case "daisy":
        spanNombre.textContent = "Princesa Daisy";
        break;
    default:
        spanNombre.textContent = "Personaje no reconocido";
        return;
}

//Punto 3
let idMinusculas = nombre.toLowerCase(); 
let elementoEncontrado = document.getElementById(idMinusculas);

if (elementoEncontrado) {
    elementoEncontrado.setAttribute("title", "Presentado");
} 
});
}
obtenerNombrePersonaje();

