/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

// Variables globales
let baraja = crearBaraja();
let puntosJugador = 0;
let puntosComputadora = 0;
let turno = "jugador";

// Variable HTML
const botonPedirCarta = document.getElementById("btnPedir");
const botonDetener = document.getElementById("btnDetener");
const botonNuevo = document.getElementById("btnNuevo");
const cartasJugador = document.getElementById("jugador-cartas");
const cartasComputadora = document.getElementById("computadora-cartas");
const contPuntosJugador = document.getElementById("puntosJugador");
const contPuntosComputadora = document.getElementById("puntosComputadora");

// Main

main();

// Añadir eventos

botonPedirCarta.addEventListener("click",funcionalidadPedirCarta);
botonDetener.addEventListener("click", funcionalidadDetener)
botonNuevo.addEventListener("click", reset);


// Funciones

function funcionalidadPedirCarta(){

    let carta = sacarCarta();

    insertarImgCarta(carta);

    let puntos = sumarPuntos(carta);

    if(comprobarPuntos(puntos)){

        botonPedirCarta.setAttribute("disabled", true);

        turnoComputadora();
    }

}

function funcionalidadDetener(){

    turnoComputadora();
}

function main(){

    baraja = crearBaraja();

    barajar();

}

function crearBaraja(){

    let listaPalos = ["C", "D", "H", "S"];
    let carta = [];
    let baraja = [];

    for (let numero = 1; numero <= 13; numero++) {
        
        for (const palo of listaPalos) {
            
            carta = [numero.toString() + palo, +numero];
            baraja.push(carta);

        }

    }

    return baraja;

}

function obtenerImagen(carta){

    let imgCarta = "";
    let arrayChar = carta[0].split("");

    let palo = arrayChar[arrayChar.length - 1];

    // Voy a obtener el valor numerico de la carta
    let numero = carta[1];

    // Voy a obtener las figuras que no tienen numero J, Q, K, A
    switch(numero){

        case 11:

            carta[0] = "J" + palo; //nombre
            carta[1] = 10; // Valor

            break;
            
        case 12:

            carta[0] = "Q" + palo;
            carta[1] = 10;

            break;

        case 13:

            carta[0] = "K" + palo;
            carta[1] = 10;

            break;

        case 1:

            carta[0] = "A" + palo;
            carta[1] = 11;
 
    }


    imgCarta = carta[0] + ".png";
    
    return imgCarta;
}

// Para tener nombre mas descriptivo
function barajar(){

    baraja = _.shuffle(baraja);
}

function sacarCarta(){

    return baraja.pop();
}

// Insertar imagenCarta
function insertarImgCarta(carta){

    let path = "../cartas/";
    let img = document.createElement("img");
    img.src = path + obtenerImagen(carta);
    img.className = "carta";

    if(turno == "jugador"){

        cartasJugador.append(img);

    } else{

        cartasComputadora.append(img);
    }

}

function sumarPuntos(carta){

    if(turno == "jugador"){

        puntosJugador = puntosJugador + carta[1];
        contPuntosJugador.innerText = puntosJugador;
        return puntosJugador;

    } else{

        puntosComputadora = puntosComputadora + carta[1];
        contPuntosComputadora.innerText = puntosComputadora;
        return puntosComputadora;
    }
}

function comprobarPuntos(puntos){

    let control = false;

    if(puntos > 21){

        control = true;
    }

    return control;
}

function turnoComputadora(){

    botonPedirCarta.disabled =  true;

    turno = "computadora";

    do {
    
        let carta = sacarCarta();

        insertarImgCarta(carta);

        let puntos = sumarPuntos(carta);

    } while (puntosComputadora < puntosJugador && puntosJugador <= 21);

    setTimeout(() => alert(comprobarGanador()),200);

}

function reset(){

    puntosComputadora = 0;
    puntosJugador = 0;
    turno = "jugador";
    contPuntosJugador.innerText = puntosJugador;
    contPuntosComputadora.innerText = puntosComputadora;
    botonPedirCarta.disabled = false;
    borrarCartas();
    baraja = _.shuffle(crearBaraja());
}

function comprobarGanador(){

    let ganador = "";

    // Si se han pasado
    if(puntosComputadora > 21){

        puntosComputadora = -1;

    }
    if(puntosJugador > 21){

        puntosJugador = -1;
    }

    // Comprobar ganador
    if(puntosJugador > puntosComputadora){

        ganador = "jugador";

    }else{

        ganador = "computadora";
    }

    return ganador;
}

function borrarCartas(){

    while (cartasJugador.firstChild) {

        cartasJugador.removeChild(cartasJugador.firstChild);

    }

    while (cartasComputadora.firstChild) {

        cartasComputadora.removeChild(cartasComputadora.firstChild);

    }
}

