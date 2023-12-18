// Elementos HTML
const usuarioInput = document.getElementById("usuario");
const contraseña = document.getElementById("passwd");
const btnConsultar = document.getElementById("botonConsultar");
const btnCerrar = document.getElementById("botonCerrarSesion"); 
const saludo = document.getElementById("saludo");

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
let listaUsuarios = obtenerListaUsuarios();

let jugadorActual = {

    usuario: "",
    fallos: 0,
};

// EVENTOS
for (let i = 0; i < listaCartas.length; i++) {
    
    const carta = document.getElementById("carta"+i.toString());
    
    carta.addEventListener("click", () => cartaClick(i, carta));
}

btnConsultar.addEventListener("click", comprobarUsuario);