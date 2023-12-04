// URL
const baseURL = "http://localhost:3000/";

// Variables HTML
const contenedorListadoPelicula = document.getElementById("listado");
const titulo = document.querySelector("#listado-peliculas h2");
const contenedorInfoPelicula = document.getElementById("info-pelicula");
const infoDirector = document.getElementById("director");
const infoClasificacion = document.getElementById("clasificacion");
const infoValoracion = document.querySelector(".estrellas");
const infoCartel = document.querySelector("#cartel img");

// eventos
titulo.addEventListener("click", mostrarListaPeliculas);

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

    borrarListaPeliculas(); // Resetear lista de peliculas

    fetch(baseURL + "peliculas/").then( resp => {

        if (resp.status == 200) { // Fetch correcto
    
            contenedorInfoPelicula.style.display = "none"; // Oculto info pelicula
    
            resp.json().then(data => { // Obtencion JSON correcto
    
                listaPeliculas = data;
                insertarListado(listaPeliculas); // Inserto listado
                console.log("fetch leído lista peliculas");
            })
    
        } else {
    
            console.log("El recurso no existe");
        }
        
    }).catch ( error => console.log("fetch error:" + error));
}

function mostrarInformacion(id){

    contenedorInfoPelicula.style.display = "block"; // Muestro info pelicula
    reset(); // Reset de informacion para que aparezca cargando...

    fetchSlow(baseURL + "pelicula/" + id.toString()).then( resp => {

        let pelicula = null

        if (resp.status == 200) {
    
            resp.json().then(data => {
    
                pelicula = data;
                insertarDatos(pelicula); // Inserto datos
                console.log("fetch leído informacion pelicula");
            })

        } else {

            console.log("El recurso no existe");
            contenedorInfoPelicula.innerText = "Error al leer informacion de la pelicula"; // Muestro error
        }

    }).catch ( error => console.log("fetch error:" + error));
}

function insertarDatos(pelicula){

    let clasificacion = null; // Recojo clasificacion por si la necesitara

    infoDirector.innerText = pelicula.director;
    clasificacion = buscarClasificacion(pelicula.clasificacion);
    pintarEstrellas(pelicula); // Pinta estrellas de valoracion
    infoCartel.setAttribute("src", "assets/imgs/" + pelicula.cartel); // Cambio gif por cartel

}

function buscarClasificacion(idClasificacion){

    let clasificacion = null;
    let ruta = baseURL + "clasificaciones/" + idClasificacion; // Traza depuracion

    fetch(ruta).then( resp => {

        if (resp.status == 200) {
    
            resp.json().then(data => {
    
                clasificacion = data;
                infoClasificacion.innerText = clasificacion.nombre;
                console.log("fetch leído clasificacion");
                return clasificacion;
            })
    
        } else {
    
            console.log("El recurso no existe");
        }
        
    }).catch ( error => console.log("fetch error:" + error));
}

function pintarEstrellas(pelicula){

    borrarEstrellas(); // Reset estrellas

    let estrellasTotales = pelicula.valoracion;

    for (let i = 0; i < estrellasTotales; i++) {

        let iconoEstrella = document.createElement("i");
        iconoEstrella.className = "fa fa-star";
        infoValoracion.append(iconoEstrella);
    }
}

function borrarEstrellas(){

    while (infoValoracion.firstChild) {

        infoValoracion.removeChild(infoValoracion.firstChild);
    }
}

function borrarListaPeliculas(){

    while (contenedorListadoPelicula.firstChild) {

        contenedorListadoPelicula.removeChild(contenedorListadoPelicula.firstChild);
    }
}

function reset(){

    infoDirector.innerText = "cargando...";
    infoClasificacion.innerText = "cargando...";
    infoValoracion.innerText = "cargando...";
    infoCartel.setAttribute("src", "assets/imgs/circle-9360_128.gif");
}