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

function main(){



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

    _.shuffle(baraja);
}

function sacarCarta(){

    return baraja.pop();
}

// Insertar imagenCarta
function insertarImgCarta(carta, player){


}


