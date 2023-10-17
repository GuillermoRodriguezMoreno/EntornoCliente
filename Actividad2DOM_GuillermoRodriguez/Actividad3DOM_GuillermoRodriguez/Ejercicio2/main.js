// Variables globales

let listaNumeros = [];
let listaAux = [];
let suma = 0;
let media;

// Añadir funcionalidad a los botones

const botonEmpezar = document.getElementById("btnEmpezar");
const botonIntroducir = document.getElementById("btnIntroducir")

botonEmpezar.addEventListener('click', funcionalidadInicial);
botonIntroducir.addEventListener('click', volverIntroducir);

// Funciones

// Pedir numeros
function pedirNumeros(){

    let num;

    do {

        num = prompt("Introduce numeros (uno negativo para salir)");

        if (isNaN(num) || num == ""){

            alert(num + " no es un numero");

        }

        else if (num > -1){

            listaNumeros.push(num);

        }
        
    } while (num > -1);

}

// Reset variables globales

function reset(){

    listaNumeros = [];
    suma = 0;
    media = 0;

}

// Obtener suma
function obtenerSuma(){

    // Recorrer lista numeros y obtener suma
    for (const num of listaNumeros) {

        suma = +suma + +num;
        
    }

}

// Obtener media
function obtenerMedia(){

    media = suma / listaAux.length;

}


// Funcionalidad al empezar
function funcionalidadInicial(){

    // Reset variables
    reset();

    // Funcionalidad
    volverIntroducir();

}

// Volver a introducir
function volverIntroducir(){

    listaAux = JSON.parse(JSON.stringify(listaNumeros));

    reset();

    // numeros
    pedirNumeros();

    // suma
    obtenerSuma();

    // media
    obtenerMedia();

    alert(suma);
    alert(media);

}