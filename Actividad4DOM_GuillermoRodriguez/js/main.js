
const contenedorLista = document.getElementById("lista");
const dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const botonSem = document.getElementById("dias");
const botonMes = document.getElementById("meses");
const desplegable = document.getElementById("desplegable");

// Añadir listener

botonSem.addEventListener("click", () => funcionalidad("dia"));
botonMes.addEventListener("click", () => funcionalidad("mes"));


// Funciones

function funcionalidad(boton){

    // Modificar lista

    let divAAñadir = "";

    borrarHijos("lista");

    borrarHijos("desplegable")

    if(boton == "dia"){

        añadirTitulo("Dias de la semana");

        for (const dia of dias) {
        
            divAAñadir = document.createElement("div");
            divAAñadir.setAttribute("class", "col");
            divAAñadir.innerText = dia;
    
            contenedorLista.append(divAAñadir);
    
        }

        modificarDesplegable("dia");

    }

    else if(boton == "mes"){

        añadirTitulo("Meses del año");

        for (const mes of meses) {
        
            divAAñadir = document.createElement("div");
            divAAñadir.setAttribute("class", "col");
            divAAñadir.innerText = mes;
    
            contenedorLista.append(divAAñadir);
    
        }

        modificarDesplegable("mes");

    }

}

// function semana(){

//     // Modificar lista

//     borrarHijos("lista");
    
//     añadirTitulo("Dias de la semana");

//     let divAAñadir = "";

//     for (const dia of dias) {
        
//         divAAñadir = document.createElement("div");
//         divAAñadir.setAttribute("class", "col");
//         divAAñadir.innerText = dia;

//         contenedorLista.append(divAAñadir);

//     }

//     // Modificar desplegable

//     borrarHijos("desplegable");

//     modificarDesplegable("dia");

// }

// function mes(){

//     // Modificar lista

//     borrarHijos("lista");
    
//     añadirTitulo("Meses del año");

//     let divAAñadir = "";

//     for (const mes of meses) {
        
//         divAAñadir = document.createElement("div");
//         divAAñadir.setAttribute("class", "col");
//         divAAñadir.innerText = mes;

//         contenedorLista.append(divAAñadir);

//     }

//     // Modificar desplegable

//     borrarHijos("desplegable");

//     modificarDesplegable("mes");

// }

function borrarHijos(id){

    let lista = document.getElementById(id)

    while(lista.firstChild){

        lista.removeChild(lista.firstChild);

    }
}

function añadirTitulo(texto){

    let titulo = document.createElement("h1");
    titulo.innerText = texto;
    contenedorLista.append(titulo);

}

function modificarDesplegable(opcion){

    let eDesplegable = "";

    switch (opcion) {

        case "dia":

            for (const dia of dias) {
                
                eDesplegable = document.createElement("option");
                eDesplegable.innerText = dia;
                desplegable.append(eDesplegable);

            }
            
            break;

        case "mes":

            for (const mes of meses) {
                    
                eDesplegable = document.createElement("option");
                eDesplegable.innerText = mes;
                desplegable.append(eDesplegable);

            }

            break;
    
        default:

            break;

    }

}