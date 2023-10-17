// Recojo boton

const boton = document.getElementById("boton");

// Añadir evento al boton

boton.addEventListener('click', pedirNumeros);

// Funciones

//Pedir numeros
function pedirNumeros(){

    let numero1 = 0;
    let numero2 = 0;

    // Control

    do {
    
        numero1 = prompt("Introduce un numero");
        numero2 = prompt("Introduce el segundo numero");

    }while (controlNumeros(numero1, numero2) == false);

    comparacion(numero1, numero2);

}

//Control numeros
function controlNumeros(num1, num2){

    let control = true

    if(num1 <= 0 || isNaN(num1)){

        control = false;

        alert("el numero " + num1 + " no es correcto");

    }

    if(num2 <= 0 || isNaN(num2)){

        control = false;

        alert("el numero " + num2 + " no es correcto");
    }

    return control;

}

//Funcionalidad
function comparacion(num1, num2){

    // Variables

    let imagenes = ["mayor", "menor", "igual"];
    let icono;
    let mensaje;

    // Comparacion

    num1 > num2 ? (mensaje = "mayor que", icono = imagenes[0]) : num1 < num2
            ? (mensaje = "menor que", icono = imagenes[1]) : (mensaje = "igual que", icono = imagenes[2]);


    // Obtengo celdas

    const celda1 = document.getElementById("numero1");
    const celda2 = document.getElementById("mensaje");
    const celda3 = document.getElementById("numero2")
    const imagen = document.getElementById("imagen");

    // Relleno texto en HTML

    celda1.innerText = num1;
    celda2.innerText = mensaje;
    celda3.innerText = num2;
    imagen.setAttribute("src", eleccionIcono(icono));

}

//Eleccion de icono
function eleccionIcono(icono){

    let urlImagen

    switch (icono) {

        case "mayor":

            urlImagen = "https://media.istockphoto.com/id/1204658131/es/vector/verde-tick-y-confirmar-dise%C3%B1o-de-vectores-de-icono.jpg?s=2048x2048&w=is&k=20&c=kZuzfnS_EBPmDRsEt0p9Y-y9zdW7eXCWdcVk1BE70eo="
            
            break;
    
        case "menor":

            urlImagen = "https://www.shutterstock.com/shutterstock/photos/650911849/display_1500/stock-vector-red-cross-icon-isolated-on-transparent-background-symbol-no-or-x-button-for-correct-vote-check-650911849.jpg"

            break;

        default:

            urlImagen = "https://www.shutterstock.com/shutterstock/photos/1505804831/display_1500/stock-vector-green-equal-icon-flat-illustration-of-equal-vector-1505804831.jpg"

            break;

    }

    return urlImagen

}

