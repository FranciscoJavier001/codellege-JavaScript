const button = document.getElementById('btnCalificacion');

button.addEventListener('click', verificarCalificacion);

function verificarCalificacion() {
    const Calificacion = Number(document.getElementById('inpCalificacion').value);

    const ZonePrint = document.getElementById('zonePrint')
    if (Calificacion >= 8) {
        ZonePrint.innerText = `Alumno: Aprobado`
    } else {
        ZonePrint.innerText = `Alumno: Reprobado`
        const audioDonRamon = document.getElementById('audioReprobado');
        audioDonRamon.play();
    }
}