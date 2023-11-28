// URL
const baseURL = "http://localhost:3000/";

// Variables HTML
const contenedorListadoPelicula = document.getElementById("listado");

// Variables globales
let listaPeliculas = [];

// Main

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

// Funciones
function insertarListado(listaPeliculas){

    let li = document.createElement("li")

}