/* El promedio de prácticas de un curso se calcula en base a cuatro prácticas calificadas de las cuales se elimina la nota menor y se promedian las tres notas más altas. Diseñe un algoritmo que determine la nota eliminada y el promedio de prácticas de un estudiante. */

const button = document.getElementById('btnApp');
button.addEventListener('click', comprobarPromedio);

function comprobarPromedio() {
    const ZonePrint = document.getElementById('zonePrint');
    const cal1 = Number(document.getElementById('inpCalificacion1').value);
    const cal2 = Number(document.getElementById('inpCalificacion2').value);
    const cal3 = Number(document.getElementById('inpCalificacion3').value);
    const cal4 = Number(document.getElementById('inpCalificacion4').value);
    let = eliminada = 0;

    if (cal1 < cal2 && cal1 < cal3 && cal1 < cal4) {
        eliminada = cal1;
    } else if (cal2 < cal1 && cal2 < cal3 && cal2 < cal4) {
        eliminada = cal2;
    } else if (cal3 < cal1 && cal3 < cal2 && cal3 < cal4) {
        eliminada = cal3;
    } else if (cal4 < cal1 && cal4 < cal2 && cal4 < cal3)
        eliminada = cal4;

    ZonePrint.innerText = `Calificacion I: ${cal1}
        Calificacion II: ${cal2}
        Calificacion III: ${cal3}
        Calificacion IV: ${cal4}
        Calificacion Eliminada: ${eliminada}
        Promedio: ${((cal1+cal2+cal3+cal4-eliminada)/3)}`;
}