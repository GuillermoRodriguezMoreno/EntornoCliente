// Variables
const email = document.getElementById("mail");
const formulario = document.querySelector("form");
const emailError = document.querySelector("#emailError span");

// Funciones
function validaEmail(){

    let test = true;

    // No tiene 10 caracteres
    if(email.validity.tooShort){

        email.setCustomValidity("El email debe tener al menos 10 caracteres")
        test = false;

    // No es formato email
    }else if(email.validity.typeMismatch){

        email.setCustomValidity("El email debe tener al menos una letra, @, una letra, un punto y un dominio de minimo dos letras. Ejemplo: a@a.uk")
        test = false;

    // Esta vacio
    }else if(email.validity.valueMissing){

        email.setCustomValidity("El email es obligatorio")
        test = false;

    // No cumple la expresion regular
    }else if(email.validity.patternMismatch){

        email.setCustomValidity("El email debe tener al menos una letra, @, una letra, un punto y un dominio de minimo dos letras. Ejemplo: a@a.uk")
        test = false;

    }else{

        email.setCustomValidity("");
    }

    emailError.innerText = email.validationMessage;

    return test;

}

// Añadir eventos
email.addEventListener("input", validaEmail);
validaEmail();

// Eliminar validacion HTML
formulario.setAttribute("novalidate", true);

// Valida formulario
function validaFormulario(event){

    let test = true;

    if(!validaEmail()){

        test = false;

    }else{

        emailError.innerText = "";
    }

    if(!test){

        event.preventDefault();
    }

    return test;
    
}

// Añadir evento
formulario.addEventListener("submit", validaFormulario);