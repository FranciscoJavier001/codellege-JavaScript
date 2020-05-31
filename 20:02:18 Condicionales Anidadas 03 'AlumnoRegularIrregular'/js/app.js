const button = document.getElementById('btnCalcular');
button.addEventListener('click', calcularProm);

function calcularProm() {
    const cal1 = Number(document.getElementById('inpCal1').value);
    const cal2 = Number(document.getElementById('inpCal2').value);
    const cal3 = Number(document.getElementById('inpCal3').value);

    let prom = (cal1 + cal2 + cal3) / 3;;

    const ZonePrint = document.getElementById('zonePrint');

    if (prom >= 9) {
        ZonePrint.innerHTML = `Alumno: Aprobado.`;
    } else if (prom >= 6 && prom < 9) {
        ZonePrint.innerHTML = `Alumno: Regular.`;
    } else {
        ZonePrint.innerHTML = `Alumno: Reprobado.`;
    }
}