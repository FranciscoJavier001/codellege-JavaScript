/* Crea un array de numeros donde le indicamos por teclado el tamaño del array, rellenaremos el array
con numeros aleatorios entre 0 y 9, al final muestra por pantalla el valor de cada posicion
y la suma de todos los valores. Haz un metodo para rellenar el array ( que tenga como parametros
los numeros entre los que tenga que generar ), para msotrar el contenido y la suma del array y un
metodo privado para generar numero aleatorio (lo puedes usar para otros ejercicios) */
function EventListener() {
    document
        .getElementById("TamanoArray")
        .addEventListener("keypress", CrearInput);
}

EventListener();

function CrearInput(event) {
    if (event.key == "Enter") {
        /*
           Si isNaN = true quiere decir que no es un numero
           Si isNaN = false quiere decir que es numero
           */
        if (isNaN(event.target.value)) return;

        RellenarArreglo(event.target.value);
    }
}

function RellenarArreglo(tamanoArray) {
    let arregloNumeroAleatorios = [];

    for (let i = 0; i < tamanoArray; i++) {
        arregloNumeroAleatorios[i] = Math.floor(Math.random() * (10 - 1) + 1);
    }
    MostrarValores(arregloNumeroAleatorios);
}

function MostrarValores(arregloLleno) {
    let listGroup = document.getElementById("ListaArreglo");
    let imprimir = document.getElementById("imprimir");
    let sumaArray = 0;

    for (let i = 0; i < arregloLleno.length; i++) {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        li.innerText = arregloLleno;
        listGroup.appendChild(li);

        sumaArray += arregloLleno[i];
    }

    imprimir.innerText = `La suma es ${sumaArray}`;
}