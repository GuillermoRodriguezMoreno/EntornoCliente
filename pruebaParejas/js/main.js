// Elementos HTML



// Variables Globales
let listaCartas = crearBaraja();
let cartaActual = null;
let cartaAux = null;
let contadorFallos = 0;
let intentos = 0;
let turno = 0;
let aciertos = 0;
let indiceActual = 0;
let indiceAux = 0;

// EVENTOS
for (let i = 0; i < listaCartas.length; i++) {
    
    const carta = document.getElementById("carta"+i.toString());
    
    carta.addEventListener("click", () => cartaClick(i, carta));
}