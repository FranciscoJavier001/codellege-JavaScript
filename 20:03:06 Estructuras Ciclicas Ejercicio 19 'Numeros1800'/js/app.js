/*
Escriba un programa que imprima los números de siguiente serie “5,7,10,12,15,17,...,n”hasta que la suma de los números sea = 1,800.
*/

eventListener();

function eventListener() {
    const button = document.getElementById('btnSerie');
    button.addEventListener('click', iniciaSerie);
}

function iniciaSerie() {
    let inicioSerie = 5;
    let contador = 1;
    let serie = '';
    const ZonePrint = document.getElementById('ZonePrint');

    serie = 5; //Este es el primer numero que se pone, osea el 5

    while (inicioSerie < 1800) {
        if (contador % 2 == 0) {
            inicioSerie = inicioSerie + 3; //Aqui ponemos lo que aumenta segun la condicion
        } else {
            inicioSerie = inicioSerie + 2; //Aqui ponemos lo que aumenta segun la condicion
        }
        contador++ //El contador va aumentando cada vez, por eso la primera ves subio 2 y la segunda 3 (1%2 = .5 (osea sube 2 luego 2%2 = 0 sube 3))
        serie = serie + `, ${inicioSerie}`;
    }
    ZonePrint.innerText = serie;
}