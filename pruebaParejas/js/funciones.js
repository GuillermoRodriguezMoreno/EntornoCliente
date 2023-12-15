function crearBaraja(){

    let listaPalos = ["C", "D", "H", "S"];
    let baraja = [];
    let listaCartas = [];
    let carta = "";

    for (let numero = 1; numero <= 13; numero++) {
        
        for (const palo of listaPalos) {
            
            carta = numero.toString() + palo;
            baraja.push(carta);
        }
    }

    baraja = _.shuffle(baraja);

    // Obtener 6 primeras cartas de la baraja
    for (let i = 0; i <= 5; i++) {
    
        // Añado parejas
        listaCartas.push(baraja[i]);
        listaCartas.push(baraja[i]);
    }

    listaCartas = _.shuffle(listaCartas);

    return listaCartas;
}

function obtenerImagen(carta){

    let imgCarta = "";
    let arrayChar = carta.split(""); // Parto por caracteres

    let palo = arrayChar[arrayChar.length - 1]; // obtengo el ultimo (palo)

    // Voy a obtener el valor numerico de la carta
    let numero = carta.substring(0, carta.length-1);

    // Voy a obtener las figuras que no tienen numero J, Q, K, A
    switch(numero){

        case "11":

            carta = "J" + palo; //nombre
            break;
            
        case "12":

            carta = "Q" + palo;
            break;

        case "13":

            carta = "K" + palo;
            break;

        case "1":

            carta = "A" + palo;
    }

    imgCarta = "assets/img/cartas/" + carta + ".png";
    
    return imgCarta;
}

function cartaClick(i, carta){

    if(carta.src.includes("red")){

        carta.src=obtenerImagen(listaCartas[i]);
    }
    
}

function resetCartas(){

    let dorso = "assets/img/cartas/red_back.png";

    for (let i = 0; i < listaCartas.length; i++) {
        
        const carta = document.getElementById("carta"+i);
        carta.src = dorso;
    }
}
