/* Elaborar un algoritmo que solicite la edad de 2 hermanos y muestre un mensaje indicando la edad del mayor y cuantos años de diferencia tiene con el menor. */
const button = document.getElementById('btnComparar');
button.addEventListener('click', calculaDiferencia);

function calculaDiferencia() {
    const edad1 = Number(document.getElementById('inpEdad1').value);
    const edad2 = Number(document.getElementById('inpEdad2').value);

    const ZonePrint = document.getElementById('zonePrint');

    let diferencia;

    if (edad1 > edad2) {
        diferencia = edad1 - edad2;
        ZonePrint.innerText = `La Edad Mayor es de: ${edad1} años
        La Diferencia es de: ${diferencia} años`;
    } else if (edad1 < edad2) {
        diferencia = edad2 - edad1;
        ZonePrint.innerText = `La Edad Mayor es de: ${edad2} años
        La Diferencia es de: ${diferencia} años`;
    } else
        ZonePrint.innerText = `Ambos Hermanos Tienen la misma Edad`
}