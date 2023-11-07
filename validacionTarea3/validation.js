// Variables

const email = document.getElementById("mail");
const formulario = document.querySelector("form");

const emailError = document.querySelector("#emailError span");

// Funciones

function validaEmail(){

    let test = true;

    if(email.validity.tooShort){

        email.setCustomValidity("El email debe tener al menos 10 caracteres")
        test = false;

    }

    else if(email.validity.typeMismatch){

        email.setCustomValidity("El formato no es el adecuado")
        test = false;

    }

    else if(email.validity.valueMissing){

        email.setCustomValidity("El email es obligatorio")
        test = false;

    }

    else if(email.validity.patternMismatch){

        email.setCustomValidity("El email debe tener al menos una letra, @, una letra, un punto y un dominio de minimo dos letras. Ejemplo: a@a.uk")
        test = false;

    }

    else{

        email.setCustomValidity("");

    }

    return test;

}

// Añadir eventos
email.addEventListener("input", validaEmail);
validaEmail();

// Eliminar validacion HTML
formulario.setAttribute("novalidate", true);


function validaFormulario(event){

    let test = true;

    if(!validaEmail()){

        emailError.innerText = email.validationMessage;
        test = false;

    }

    else{

        emailError.innerText = "";

    }

    if(!test){

        event.preventDefault();

    }

    return test;

}

formulario.addEventListener("submit", validaFormulario);