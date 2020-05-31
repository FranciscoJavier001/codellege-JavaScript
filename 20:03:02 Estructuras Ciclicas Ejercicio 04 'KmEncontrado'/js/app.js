/* Una persona se encuentra en el kilómetro 70 de la carretera Aguascalientes Zacatecas, otra se encuentra en el km 150 de la misma carretera, la primera viaja en dirección a Zacatecas, mientras que la segunda se dirige a Aguascalientes, a la misma velocidad. Realice un algoritmo para determinar en qué kilómetro de esa carretera se encontrarán */

eventListener();

function eventListener() {
    const button = document.getElementById('btnComenzar');
    button.addEventListener('click', puntoEncuentro);
}

function puntoEncuentro() {
    let ags = 70,
        zac = 150;
    let mientras = true;
    while (mientras) {
        ags++;
        zac--;
        if (ags == zac) {
            mientras = false;
        }
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = `Se encontraron en el KM ${ags}`;
}