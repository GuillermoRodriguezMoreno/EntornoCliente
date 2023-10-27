const formulario = document.getElementById("formulario") ;
const nombre = document.getElementById("nombre");
const email =  document.getElementById("email");
const edad = document.getElementById("edad");
const boton = document.getElementById("submit");


//PASO 1: Personalizar mensaje de validación
//Indicar mayoría de edad
function validaEdad() {

    if(edad.validity.valueMissing) edad.setCustomValidity("La edad es obligatoria");

    else if(edad.validity.rangeUnderflow)edad.setCustomValidity("Debe ser mayor de edad");
        
    else if(edad.validity.rangeOverflow) edad.setCustomValidity("La edad es demasiada alta");

        else edad.setCustomValidity(""); // importante este else para resetear!

}

edad.addEventListener("input", validaEdad);

validaEdad(); // llamar siempre a la funcion despues de añadir el evento


//Paso 2: Configurar mensaje la primera vez



//PASO 3: Segunda validación tras la automática del navegador por HTML5
// correo electrónico de dominio @gmail.com

function extraeDominio() {

    let emailSeg = email.value.split("@");
    let dominio = emailSeg[1];

    return dominio;

}

function validaEmail(){

    if(email.validity.valueMissing) email.setCustomValidity("El email es obligatorio");

    else if(extraeDominio() != "gmail.com") email.setCustomValidity("El dominio debe ser gmail.com");

    else if(email.validity.typeMismatch) email.setCustomValidity("El formato no es el adecuado");

        else email.setCustomValidity(""); // importante este else para resetear!

}

email.addEventListener("input", validaEmail);

validaEmail();

function validaFormulario(event) {



}




//PASO 4: Eliminar validación automática del navegador

formulario.setAttribute("novalidate", true);

//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

// function validaNombre() {

// }
// function validaEmail(){

// }

// function validaEdadHTML5(){

// }

// function validaEdadJS(){

// }

// function validaFormulario(event) {

// }



