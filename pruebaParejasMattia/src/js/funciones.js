function baraja() {
    let numero=["2","3","4","5","6","7","8","9","10","J","Q","K"];
    let letra=["C","D","H","S"];
    numero.forEach(n => {
        letra.forEach(l => {
            enJuego.mazo.push(n+l);
        });
    });
    enJuego.mazo=_.shuffle(enJuego.mazo);
    enJuego.mazo=enJuego.mazo.slice(0,6);
    enJuego.mazo=enJuego.mazo.concat(enJuego.mazo);
    enJuego.mazo=_.shuffle(enJuego.mazo);
}
/*no hay el boton para newGame(usado para cuando cierra session) */
function newGame() {
    baraja();
    intentos.innerHTML=0;
    enJuego.intento=0;
    enJuego.cartaGirada=[];
}
function girar(index) {
    let carta=document.getElementById("carta"+index);
    //girar si no tiene la clase girada(lo mismo de buscar en el src si hay red) y que hay un jugador jugando(se puede reemplazar por un booleano cualquiera)
    if (!carta.classList.contains("girada")&& jugador.id!=0) {
        //girar la carta
        carta.src="assets/img/cartas/"+enJuego.mazo[index]+".png";
        carta.classList.add("girada");
        enJuego.cartaGirada.push(index);
        //si hay dos cartas giradas
        if (enJuego.cartaGirada.length%2==0) {
            //obtener la posicion de la carta anterior
            let indexCartaAnterior=enJuego.cartaGirada[enJuego.cartaGirada.length-2];
            //si no son iguales
            if (enJuego.mazo[indexCartaAnterior]!=enJuego.mazo[index]) {
                //obtener la carta anterior
                let cartaAnterior=document.getElementById("carta"+indexCartaAnterior);
                //reset con retraso para que el usuario pueda ver que carta es
                setTimeout(()=>{
                    reset(carta);
                    reset(cartaAnterior);
                },200);
                //eliminar desde el array
                enJuego.cartaGirada.pop();
                enJuego.cartaGirada.pop();
                //añadir el numero de intento y mostrarlo
                enJuego.intento++;
                intentos.innerHTML=enJuego.intento;
            }
        }
    }
    //si están todas giradas.
    if (enJuego.cartaGirada.length==12) {
        //actualizar resultado(añadir numIntento)
        jugador=JSON.parse(localStorage.getItem("jugador"));
        jugador.resultado.push(enJuego.intento);
        localStorage.setItem("jugador",JSON.stringify(jugador));
        //dejar de guardar
        window.removeEventListener("beforeunload",guardar)

    }
}
function reset(c){
    //resetear
    c.src="assets/img/cartas/red_back.png";
    c.classList.remove("girada");
}
//copia del examen
function consulta() {
    obtenerJugadores().then(datas=>{
        datas.forEach(data => {
            if (usuario.value==data.nombre && contraseña.value==data.passwd) {
                jugador.id=data.id;
                jugador.nombre=data.nombre;
                jugador.resultado=data.resultado
                localStorage.setItem("jugador",JSON.stringify(jugador));
                login();
                return;
            }
        });
    })
}
function login() {
    jugador=JSON.parse(localStorage.getItem("jugador"));
    document.getElementById("saludo").innerHTML="<h1>"+jugador.nombre+"</h1>"
    cerrar.classList.remove("invisible")
    consultar.classList.add("invisible")
    usuario.classList.add("invisible");
    contraseña.classList.add("invisible")
}
function cerrado() {
    localStorage.removeItem("jugador");
    document.getElementById("saludo").innerHTML=""
    consultar.classList.remove("invisible")
    usuario.classList.remove("invisible")
    contraseña.classList.remove("invisible")
    cerrar.classList.add("invisible")
    //resets
    newGame();
    for (let index = 0; index < 12; index++) {
        reset(document.getElementById("carta"+index));
    }
    //resetear jugador
    jugador= {
        id: 0,
        nombre: "",
        resultado: [],
    };
}
function guardar() {
    localStorage.setItem("enJuego",JSON.stringify(enJuego))
}
function cargar() {
    enJuego=JSON.parse(localStorage.getItem("enJuego"));
    localStorage.removeItem("enJuego")
    intentos.innerHTML=enJuego.intento;
    enJuego.cartaGirada.forEach(i=>{
        let carta=document.getElementById("carta"+i);
        carta.classList.add("girada");
        carta.src="assets/img/cartas/"+enJuego.mazo[i]+".png";
    })
}