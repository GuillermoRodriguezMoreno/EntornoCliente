const formulario = document.getElementById("formulario") ;
const nombre = document.getElementById("nombre");
const email =  document.getElementById("email");
const edad = document.getElementById("edad");
const boton = document.getElementById("submit");

const nombreError = document.querySelector("#nombreError span");
const emailError = document.querySelector("#emailError span");
const edadError = document.querySelector("#edadError span");


// //PASO 1: Personalizar mensaje de validación
// //Indicar mayoría de edad
// function validaEdad() {

//     if(edad.validity.valueMissing) edad.setCustomValidity("La edad es obligatoria");

//     else if(edad.validity.rangeUnderflow)edad.setCustomValidity("Debe ser mayor de edad");
        
//     else if(edad.validity.rangeOverflow) edad.setCustomValidity("La edad es demasiada alta");

//         else edad.setCustomValidity(""); // importante este else para resetear!

// }

// edad.addEventListener("input", validaEdad);

// validaEdad(); // llamar siempre a la funcion despues de añadir el evento


//Paso 2: Configurar mensaje la primera vez



//PASO 3: Segunda validación tras la automática del navegador por HTML5
// correo electrónico de dominio @gmail.com

function extraeDominio() {

    let emailSeg = email.value.split("@");
    let dominio = emailSeg[1];

    return dominio;

}

function validaEmail(){

    let test = true;

    if(email.validity.valueMissing) {
        
        email.setCustomValidity("El email es obligatorio");
        test = false;

    }else if(extraeDominio() != "gmail.com") {
        
        email.setCustomValidity("El dominio debe ser gmail.com");
        test = false;
    }

    else if(email.validity.typeMismatch) {

        email.setCustomValidity("El formato no es el adecuado");
        test = false;

    }else {
        
        email.setCustomValidity(""); // importante este else para resetear!
    }

    return test;    

}

email.addEventListener("input", validaEmail);

validaEmail();

// function validaFormulario(event) {



// }




//PASO 4: Eliminar validación automática del navegador


formulario.setAttribute("novalidate", true); // esto elimina la validacion html por lo que tambien los mensajes

//PASO 5: Añadir validación únicamente Javascript (Requisito paso 4)

function validaNombre() {

    let test = true;

    if(!nombre.validity.valid){

        test = false;
    }

    return test;

}
// function validaEmail(){

// }

function validaEdad(){

    test = true;

    if(edad.validity.valueMissing) {
        
        edad.setCustomValidity("La edad es obligatoria");
        test = false;
    }

    else if(edad.validity.rangeUnderflow){
        
        edad.setCustomValidity("Debe ser mayor de edad");
        test = false;


    }    
    else if(edad.validity.rangeOverflow){

        edad.setCustomValidity("La edad es demasiada alta");
        test = false;


    }

    else{

        edad.setCustomValidity(""); // importante este else para resetear!

    }
    
    return test;

}


 function validaFormulario(event) {

    let test = true;

    if(!nombre.validity.valid){

        nombreError.innerText = nombre.validationMessage
        nombreError.className = "error active"
        test = false;

    } else{

        nombreError.className = "error";
        nombreError.innerText = "";
    }

    if(!validaEmail()){

        emailError.innerText = email.validationMessage;
        emailError.className = "error active";
        test = false;

    } else {

        emailError.className = "error";
        emailError.innerText = "";
    }

    if(!validaEdad()){

        edadError.innerText = edad.validationMessage;
        edadError.className = "error active";
        test = false;

    } else{

        edadError.className = "error";
        edadError.innerText = "";

    }

    // Decidir si enviar el formulario
    if(!test){

        event.preventDefault(); //fuerza a no enviar el formulario
    }

    return test;

}


formulario.addEventListener("submit", validaFormulario);



