// Realizar algoritmo que, con base en una calificación proporcionada (0-10), indique con letra la calificación que le corresponde: 10 es “A”, 9 es “B”, 8 es “C”, 7 y 6 son “D” y de 5 a 0 es “F”.

const button = document.getElementById('btnApp');
button.addEventListener('click', calculaCalificacion);

function calculaCalificacion() {
    const num = Number(document.getElementById('inpCalificacion').value);

    const ZonePrint = document.getElementById('zonePrint');

    if (num >= 0 && num <= 10) {
        if (num <= 5) {
            ZonePrint.innerText = `La Calificacion es: ${num}
            Tu Calificacion es: F`;
        } else if (num <= 7 && num >= 6) {
            ZonePrint.innerText = `La Calificacion es: ${num}
            Tu Calificacion es: D`;
        } else if (num == 8) {
            ZonePrint.innerText = `La Calificacion es: ${num}
            Tu Calificacion es: C`;
        } else if (num == 9) {
            ZonePrint.innerText = `La Calificacion es: ${num}
            Tu Calificacion es: B`;
        } else {
            ZonePrint.innerText = `La Calificacion es: ${num}
            Tu Calificacion es: A`;
        }
    } else {
        ZonePrint.innerText = `Error`;
    }
}