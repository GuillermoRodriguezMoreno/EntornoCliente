// Ejercicio1

function mover_al_ultimo(){

    // Obtengo contenedor
    const contenedor = document.getElementById("lista");

    // Obtengo primer elemento hijo
    const hijo = contenedor.firstElementChild;

    // Setteo bg
    hijo.setAttribute("class", hijo.getAttribute("class") + " bg-primary");

    // Añado a contenedor
    contenedor.append(hijo);

}

// Ejercicio2

function copiar(){

    // Obtengo contenedores
    const contenedorOriginal = document.getElementById("original");
    const contenedorCopia = document.getElementById("copia");

    // Obtengo lista de hijos
    let hijos = contenedorOriginal.children;

    // Recorro lista
    for (let index = 0; index < hijos.length; index++) {

        // Copio nodos
        let copia = hijos[index].cloneNode(true);

        // Añado
        contenedorCopia.append(copia);
        
    }

}

function ordenar(){

    // Obtengo contenedor
    const contenedor = document.getElementById("ordenar");

    let hijos = contenedor.children;

    let elementos = Array.from(hijos);

    elementos.sort(function(a, b){
        
        if(a.innerText > b.innerText) return 1;

        if(a.innerText < b.innerText) return -1;

        return 0;

    })

    for(let e of elementos){

        contenedor.append(e);
        
    }

}

// main

mover_al_ultimo();

copiar();

ordenar();