// imagenes

const zorro = ["https://cdn.pixabay.com/photo/2016/03/27/22/22/fox-1284512_1280.jpg", "zorro"];
const buho = ["https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg", "buho"];
const tortuga = ["https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247_1280.jpg", "tortuga"];
const gato = ["https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg", "gato"];
const elefante = ["https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg", "elefante"];
const loro = ["https://cdn.pixabay.com/photo/2018/08/12/16/59/parrot-3601194_1280.jpg", "loro"];
const tigre = ["https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_1280.jpg", "tigre"];
const cisne = ["https://cdn.pixabay.com/photo/2017/02/28/23/00/swan-2107052_1280.jpg", "cisne"];

let imagenesInicial = [zorro, buho, tortuga, gato, elefante, loro, tigre, cisne];

const primerDiv = document.getElementById("inicial");
const ultimoDiv = document.getElementById("final")

// Main

insertarImagenes();

// Funciones

function insertarImagenes(){

    let divImg;
    let img;

    for (const imagen of imagenesInicial) {
        
        divImg = document.createElement('div');

        divImg.setAttribute("class", "col")
        divImg.setAttribute("id", imagen[1]);

        img = document.createElement('img');

        img.setAttribute('src', imagen[0]);
        img.setAttribute('width', '100px');

        // insertar img en div
        divImg.append(img);

        // Añadir evento
        añadiEvento(divImg);


        // insertar div
        primerDiv.append(divImg);


    }

}

// Añadir funcionalidad

function añadiEvento(imagen){
    
    imagen.addEventListener('click', () => {ultimoDiv.append(imagen); 
                                            console.log(imagen.getAttribute("id"));
                                            imagenesInicial.shift(imagen);
                                            console.log(imagenesInicial)}, true);

}