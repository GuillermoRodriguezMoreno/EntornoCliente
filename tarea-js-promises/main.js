// URL
const baseURL = "http://localhost:3000/";

// Variables HTML
const contenedorListadoPelicula = document.getElementById("listado");
const infoDirector = document.getElementById("director");
const infoClasificacion = document.getElementById("clasificacion");

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
        li.addEventListener("click", mostrarInformacion)
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
    
            listaPeliculas=null
            console.log("El recurso no existe");
        }
    }).catch ( error => console.log("fetch error:" + error));
}

function mostrarInformacion(){
    
}
