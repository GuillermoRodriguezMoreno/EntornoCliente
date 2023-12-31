// Variables globales

const formulario = document.querySelector("form");
const nombre = document.getElementById("uname");
const email = document.getElementById("email");
const telefono = document.getElementById("phone");
const comentario = document.getElementById("comment");

// Texto error

const nombreError = document.querySelector("#nombreError span");
const emailError = document.querySelector("#emailError span");
const telefonoError = document.querySelector("#telefonoError span");
const comentarioError = document.querySelector("#comentarioError span");

// Funciones

function validarNombre(){
    let test = true;
    if(nombre.value.length < 1){
        nombre.setCustomValidity("El nombre no puede estar vacio");
        test = false;
    }
    else if(nombre.value.length < 5 || nombre.value.length > 20){
        nombre.setCustomValidity("El nombre debe tener entre 5 y 20 caracteres")
        test = false;
    }
    else
        nombre.setCustomValidity("");
    
    return test;
}

function validarEmail(){
    
    let test = true;

    if(email.value.length < 1){

        email.setCustomValidity("El email es obligatorio");
        test = false;

    }

    else if(email.validity.typeMismatch){

        email.setCustomValidity("El formato no es el adecuado");
        test = false

    }

    else{

        email.setCustomValidity("");

    }

    return test;

}

function validarTelefono(){

    let test = true;

    // if(isNan(telefono.value)){

    //     telefono.setCustomValidity("El telefono debe ser un numero")
    //     test = false;
    // }

    if(telefono.value.length < 1){

        telefono.setCustomValidity("El telefono no puede estar vacio")
        test = false;

    }

    else if(telefono.value.length > 15){

        telefono.setCustomValidity("El telefono no puede tener mas de 15 digitos")
        test = false;

    }

    else{

        telefono.setCustomValidity("");

    }

    return test;

}

function validarComentario(){

    let test = true;

    if(comentario.value.length < 1){

        comentario.setCustomValidity("El comentario no puede estar vacio");
        test = false;

    }

    else if(comentario.value.length > 200){

        comentario.setCustomValidity("El comentario no puede tener mas de 200 caracteres")
        test = false;

    }

    else{

        comentario.setCustomValidity("");

    }

    return test;

}

// Desactivo validacion HTML
formulario.setAttribute("novalidate", true);

// Añadir eventos
nombre.addEventListener("input", validarNombre);
validarNombre();

email.addEventListener("input", validarEmail);
validarEmail();

telefono.addEventListener("input", validarTelefono);
validarTelefono();

comentario.addEventListener("input", validarComentario);
validarComentario;

// Validar formulario

function validarFormulario(event){

    let test = true;

    if(!validarNombre()){

        nombreError.innerText = nombre.validationMessage;
        test = false;
    }

    else{

        nombreError.innerText = "";

    }

    if(!validarEmail()){

        emailError.innerText = email.validationMessage;
        test = false;

    }

    else{

        emailError.innerText = "";
    }

    if(!validarTelefono()){

        telefonoError.innerText = telefono.validationMessage;
        test = false;

    }

    else{

        telefonoError.innerText = "";

    }

    if(!validarComentario()){

        comentarioError.innerText = comentario.validationMessage;
        test = false;

    }

    else{

        comentarioError.innerText = "";

    }

    if(!test){

        event.preventDefault();

    }

    return test;

}

formulario.addEventListener("submit", validarFormulario);