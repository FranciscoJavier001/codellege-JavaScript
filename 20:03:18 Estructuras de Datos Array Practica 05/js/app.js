/*
Crea un array de numeros de un tamaño pasado por teclado, el array contendra numeros aleatoreos primos entre los numeros deseados, por ultimo nos indicara cual es el mayor de todos y a suma de los valores
Haz un metodo para comprobar que el numero aleatoreo es primo, puedes hacer todos los metodos que necesites 
*/

EventListener();

let ArregloNumerosPrimosGlobal = [];

function FillArrayGlobl() {
    for (let i = 0; i < 1000; i++) {
        let bandera = true;

        for (let y = 2; y < i; y++) {

            if (i % y == 0) {
                bandera = false;
                break;
            }
        }

        if (bandera) {
            ArregloNumerosPrimosGlobal.push(i);
        }
    }
    // console.log(ArregloNumerosPrimosGlobal);
}

function EventListener() {
    document.addEventListener("DOMContentLoaded", FillArrayGlobl);
    document.getElementById("TamanoArray").addEventListener("keypress", InitApp);
}

function InitApp(event) {
    if (event.key != "Enter") return;
    if (event.target.value == "") return;
    if (event.target.value <= 0) return;
    if (isNaN(event.target.value)) return;

    fillArray(event.target.value);
}

function fillArray(TamanoArray) {
    let ArregloNumerosPrimos = [];
    let maxValue = ArregloNumerosPrimos;
    let suma = 0;

    for (let i = 0; i < TamanoArray; i++) {
        let numeroAleatorio =
            Math.floor(Math.random() * (ArregloNumerosPrimosGlobal.length - 1)) + 1;

        ArregloNumerosPrimos.push(ArregloNumerosPrimosGlobal[numeroAleatorio]);

        maxValue = Math.max(...ArregloNumerosPrimos);
        suma += ArregloNumerosPrimosGlobal[numeroAleatorio];
    }
    const ZonePrint = document.getElementById("imprimir");
    const ZonePrint2 = document.getElementById("imprimirSuma");

    ZonePrint.innerText = "Número mayor del arreglo : " + maxValue;
    ZonePrint2.innerText = "Suma del arreglo : " + suma;

    console.log(ArregloNumerosPrimos);
}