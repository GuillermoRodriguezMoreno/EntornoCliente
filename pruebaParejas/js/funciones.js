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

        if(turno < 1){

            intentos++;
            pintarIntentos(intentos);
        }
        

        carta.src=obtenerImagen(listaCartas[i]);

        turno++;
        cartaAux = cartaActual;
        indiceAux = indiceActual
        cartaActual = listaCartas[i];
        indiceActual = i;

        if(turno == 2){

            if(cartaActual == cartaAux){

                aciertos++;
            }else{

                contadorFallos++;
                resetCarta(indiceActual, indiceAux);
            }

            turno = 0;
        }
    }
}

function resetCarta(i, j){

    setTimeout(() => {
    let dorso = "assets/img/cartas/red_back.png";
    const carta1 = document.getElementById("carta"+i);
    carta1.src = dorso;
    const carta2 = document.getElementById("carta"+j);
    carta2.src = dorso;}, 500);
}

function resetTodasCartas(){

    let dorso = "assets/img/cartas/red_back.png";

    for (let i = 0; i < listaCartas.length; i++) {
        
        const carta = document.getElementById("carta"+i);
        carta.src = dorso;
    }
}

function pintarIntentos(intentos){

    const contenedor = document.getElementById("intentos");
    contenedor.innerText=intentos;
}

function obtenerListaUsuarios(){

    fetch("http://localhost:3000/jugador").then( resp => {
        if (resp.status == 200) {
            resp.json().then(data => {
                listaUsuarios = data;
                console.log("fetch leído");
            })
        } else {
            listaUsuarios=null
            console.log("no existe");
            
        }
    }).catch ( error => console.log("fetch2 error:" + error));

}

function comprobarUsuario(){

    let mensaje = "";
    let valorUsuario = usuarioInput.value;


    for (const jugador of listaUsuarios) {
        
        if(jugador.nombre == valorUsuario){

            saludo.innerText= jugadorActual.usuario;
            mensaje = "usuario logeado: " + jugador.nombre;
            break;
        }
        else{

            mensaje = "Usuairio no encontrado";
        }
    }

    alert(mensaje);
}