
//(function modulo(){

    // Variables globales
    let baraja = [];
    let puntosJugador = 0;
    let puntosComputadora = 0;
    let turno = "jugador";
    let victoriasJugador = parseInt(localStorage.getItem("victoriasJugador")); // La primera vez dara null pero lo tratamos en inicio()
    let victoriasComputadora = parseInt(localStorage.getItem("victoriasComputadora")); // "
    // Variable para indicar si el juego está comenzado
    let juegoIniciado = false;

    // Variable HTML
    const botonPedirCarta = document.getElementById("btnPedir");
    const botonDetener = document.getElementById("btnDetener");
    const botonNuevo = document.getElementById("btnNuevo");
    const cartasJugador = document.getElementById("jugador-cartas");
    const cartasComputadora = document.getElementById("computadora-cartas");
    const contPuntosJugador = document.getElementById("puntosJugador");
    const contPuntosComputadora = document.getElementById("puntosComputadora");

    // Añadir eventos
    botonPedirCarta.addEventListener("click",funcionalidadPedirCarta);
    botonDetener.addEventListener("click", turnoComputadora)
    botonNuevo.addEventListener("click", reset);

    // Añadir evento al cerrar ventana (HECHO POR IA)
    window.addEventListener("beforeunload", function(event) {
        // Verifica si el juego está comenzado
        if (juegoIniciado) {

            ++victoriasComputadora;
            localStorage.setItem("victoriasComputadora", victoriasComputadora.toString());
            localStorage.setItem("victoriasJugador", victoriasJugador.toString()); // actualizar valor
            // Establece una variable para indicar que el juego ha terminado
            event.returnValue = "El juego se ha cancelado y la computadora ha ganado";
        }
      });

    //inicio
    inicio();

    // Funciones
    function funcionalidadPedirCarta(){

        // Inicia juego cuando se saca una carta por primera vez
        juegoIniciado = true;

        let carta = sacarCarta();

        insertarImgCarta(carta);

        let puntos = sumarPuntos(carta);

        if(comprobarPuntos(puntos)){ // Comprueba si se pasa de 21

            botonPedirCarta.setAttribute("disabled", true);

            turnoComputadora();
        }
    }

    function inicio(){

        baraja = crearBaraja();

        barajar();

        if(isNaN(victoriasComputadora)){ // NaN porque es lo que devuelve al intentar parsear el null

            victoriasComputadora = 0;
        }

        if(isNaN(victoriasJugador)){

            victoriasJugador = 0;
        }
    }

    function crearBaraja(){

        let listaPalos = ["C", "D", "H", "S"];
        let carta = []; // Carta es un array [figura, valor]

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
        let arrayChar = carta[0].split(""); // Parto por caracteres

        let palo = arrayChar[arrayChar.length - 1]; // obtengo el ultimo (palo)

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

        // Añado carta en lugar correspondiente segun turno
        (turno == "jugador") ? cartasJugador.append(img) : cartasComputadora.append(img);
        
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

        (puntos > 21) ? control = true : control = false;

        return control;
    }

    function turnoComputadora(){

        botonPedirCarta.disabled =  true;
        botonDetener.disabled = true;

        turno = "computadora";

        do {
        
            let carta = sacarCarta();

            insertarImgCarta(carta);

            sumarPuntos(carta);

        } while (puntosComputadora < puntosJugador && puntosJugador <= 21);

        setTimeout(() => alert(comprobarGanador() + "\nVictorias Jugador: " + victoriasJugador.toString() + 
                                "\nVictorias Computadora: " + victoriasComputadora.toString()),200);
    }

    function reset(){

        puntosComputadora = 0;
        puntosJugador = 0;
        turno = "jugador";
        juegoIniciado = false;
        contPuntosJugador.innerText = puntosJugador;
        contPuntosComputadora.innerText = puntosComputadora;
        botonPedirCarta.disabled = false;
        botonDetener.disabled = false;
        borrarCartas();
        baraja = crearBaraja();
        barajar();
    }

    function comprobarGanador(){

        // El juego ha terminado
        juegoIniciado = false;

        let ganador = "";

        // Si se han pasado
        if(puntosComputadora > 21){

            puntosComputadora = -1;
        }
        if(puntosJugador > 21){

            puntosJugador = -1;
        }

        // Comprobar ganador
        (puntosJugador > puntosComputadora) ? ganador = "jugador" : ganador = "computadora";

        // Sumar vitorias
        (ganador == "jugador") ? ++victoriasJugador : ++victoriasComputadora;

        // Añadirlo a localStorage
        localStorage.setItem("victoriasJugador", victoriasJugador.toString());
        localStorage.setItem("victoriasComputadora", victoriasComputadora.toString());

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
//})();