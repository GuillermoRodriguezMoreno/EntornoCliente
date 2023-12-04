// URL
const baseURL = "http://localhost:3000/";

// Variables HTML
const contenedorListadoPelicula = document.getElementById("listado");
const infoDirector = document.getElementById("director");
const infoClasificacion = document.getElementById("clasificacion");
const infoValoracion = document.getElementById("estrellas");
const infoCartel = document.querySelector("#cartel img");

// Variables globales
let listaPeliculas = [];

// Main

mostrarListaPeliculas();

// Funciones
function insertarListado(listaPeliculas){

    let li;
    
    for (const pelicula of listaPeliculas) {
    
        li = document.createElement("li")
        li.innerText = pelicula.nombre
    
        li.addEventListener("click", () => {mostrarInformacion(pelicula.id)})
        contenedorListadoPelicula.append(li);
    }
}

function mostrarListaPeliculas(){

    fetch(baseURL + "peliculas/").then( resp => {

        if (resp.status == 200) {
    
            resp.json().then(data => {
    
                listaPeliculas = data;
                // crear <li> (listado de peliculas)
                insertarListado(listaPeliculas);
                console.log("fetch leído");
            })
    
        } else {
    
            console.log("El recurso no existe");
        }
        
    }).catch ( error => console.log("fetch error:" + error));
}

function mostrarInformacion(id){
    
    fetch(baseURL + "pelicula/" + id.toString()).then( resp => {

        let pelicula = null

        if (resp.status == 200) {
    
            resp.json().then(data => {
    
                pelicula = data;
                insertarDatos(pelicula);
                console.log("fetch leído");
            })

        } else {

            console.log("El recurso no existe");
        }

    }).catch ( error => console.log("fetch error:" + error));
}

function insertarDatos(pelicula){

    let clasificacion = null;

    infoDirector.innerText = pelicula.director;
    clasificacion = buscarClasificacion(pelicula.clasificacion);
    infoClasificacion.innerText = clasificacion.nombre;
    pintarClasificacion(pelicula);
    infoCartel.setAttribute("src", "assets/imgs/" + pelicula.cartel);

}

function buscarClasificacion(idClasificacion){

    let clasificacion = null;
    let ruta = baseURL + "clasificaciones/" + idClasificacion // traza depuracion

    fetch(ruta).then( resp => {

        if (resp.status == 200) {
    
            resp.json().then(data => {
    
                clasificacion = data
                console.log("fetch leído");
                return clasificacion;
            })
    
        } else {
    
            console.log("El recurso no existe");
        }

        return clasificacion;
        
    }).catch ( error => console.log("fetch error:" + error));
}

function pintarClasificacion(pelicula){

    let estrellasTotales = pelicula.valoracion;

    for (let i = 0; i < estrellasTotales; i++) {

        let iconoEstrella = document.createElement("i");
        iconoEstrella.className = "fa fa-star";
        infoValoracion.append(iconoEstrella);
    }
}