// Elementos HTML



// Variables Globales
let listaCartas = crearBaraja();
let cartaActual = null;

// EVENTOS
for (let i = 0; i < listaCartas.length; i++) {
    
    const carta = document.getElementById("carta"+i.toString());
    
    carta.addEventListener("click", () => cartaClick(i, carta));
}