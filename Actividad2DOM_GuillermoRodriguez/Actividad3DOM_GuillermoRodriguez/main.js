// Recojo boton

const boton = document.getElementById("boton");

// funcion



// Añadir evento al boton

boton.addEventListener('click', pedirNumeros);

// Funciones

//Pedir numeros
function pedirNumeros(){

    let numero1 = 0;
    let numero2 = 0;

    do {
    
        numero1 = prompt("Introduce un numero");
        numero2 = prompt("Introduce el segundo numero");

    }while (controlNumeros(numero1, numero2) == false);

}

//Control numeros
function controlNumeros(num1, num2){

    let control = true

    if(num1 <= 0 || isNaN(num1)){

        control = false;

        alert("el numero " + num1 + " no es correcto");

    }

    else if(num2 <= 0 || isNaN(num2)){

        control = false;

        alert("el numero " + num2 + " no es correcto");
    }

    return control;

}

//Funcionalidad
function comparacion(num1, num2){

    
}

