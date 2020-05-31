// Realice un algoritmo que, con base en un numero proporcionado (1-7) indique el día de la semana que le corresponda (lunes - domingo).

const button = document.getElementById('btnApp');
button.addEventListener('click', obtenerDia);

function obtenerDia() {
    const dia = Number(document.getElementById('idNumero').value);
    const ZonePrint = document.getElementById('zonePrint');

    if (dia == 1) {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Lunes`;
    } else if (dia == 2) {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Martes`;
    } else if (dia == 3) {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Miercoles`;
    } else if (dia == 4) {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Jueves`;
    } else if (dia == 5) {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Viernes`;
    } else if (dia == 6) {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Sabado`;
    } else {
        ZonePrint.innerText = `Numero Seleccionado: ${dia}
        Dia: Domingo`;
    }
}