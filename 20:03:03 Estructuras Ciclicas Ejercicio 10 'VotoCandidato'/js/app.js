/* Supóngase que en una reciente elección hubo cuatro candidatos (con identificadores 1, 2, 3, 4). Calcular el número de votos correspondientes a cada candidato y el porcentaje que obtuvo respecto al total de votantes. El programa finalizara cuando el usuario teclee un 0. */

eventListener();

function eventListener() {
    const button = document.getElementById('btnVotos');
    button.addEventListener('click', calcularVotos);
}

function calcularVotos() {
    let can1 = 0,
        can2 = 0,
        can3 = 0,
        can4 = 0;
    let voto = 1,
        numeroVotantes = 0;

    while (voto != 0) {
        voto = Number(prompt('Por quien es tu voto'));
        if (voto == 1) {
            can1++;
        } else if (voto == 2) {
            can2++;
        } else if (voto == 3) {
            can3++;
        } else if (voto == 4) {
            can4++;
        } else {
            console.log('Voto Nulo');
            numeroVotantes--;
        }
        numeroVotantes++;
    }

    const zonaImprimir = document.getElementById('divAlert');
    zonaImprimir.innerText = `Candidato 1 - ${can1} votos - ${(can1 / numeroVotantes)*100}%; \nCandidato 2 - ${can2} votos - ${(can2 / numeroVotantes)*100}%; \nCandidato 3 - ${can3} votos - ${(can3 / numeroVotantes)*100}%; \nCandidato 4 - ${can4} votos - ${(can4 / numeroVotantes)*100}%;`;
}