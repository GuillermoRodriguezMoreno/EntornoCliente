//http-provider
const obtenerJugadores = () => {
    let url="http://localhost:3000/jugador";

    return fetch(url).then(resp => resp.json())
}
//componentes
let jugador = {
    id: 0,
    nombre: "",
    resultado: [],
};
let enJuego={
    mazo:[],
    cartaGirada:[],
    intento:0
}
//main
baraja();
//var
let intentos=document.getElementById("intentos");

//boton
let consultar=document.getElementById("botonConsultar");
let cerrar=document.getElementById("botonCerrarSesion");
let usuario=document.getElementById("usuario");
let contraseña=document.getElementById("passwd");

//eventListener
consultar.addEventListener("click",consulta)
cerrar.addEventListener("click",cerrado)
window.addEventListener("beforeunload",guardar)
for (let index = 0; index < 12; index++) {
    document.getElementById("carta"+index).addEventListener("click",()=>girar(index));   
}

//parte2
if (localStorage.getItem("jugador")!=null) {
    login();
}else{
    cerrado();
}
//parte3
if (localStorage.getItem("enJuego")) {
    cargar();
}