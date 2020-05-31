/* Elabore el pseudocodigo que pida a dos usuarios el nombre y la edad e imprima el nombre del mayor. */
const button = document.getElementById('btnComparacion');

button.addEventListener('click', verificarNombreEdad);

function verificarNombreEdad() {
    const edad1 = Number(document.getElementById('inpEdad1').value);
    const edad2 = Number(document.getElementById('inpEdad2').value);
    const nombre1 = String(document.getElementById('inpNombre1').value);
    const nombre2 = String(document.getElementById('inpNombre2').value);

    const ZonePrint = document.getElementById('zonePrint')
    if (edad1 > edad2) {
        ZonePrint.innerText = `Resultado: ${nombre1}`;
        console.log(inpNombre1);
    } else if (edad1 < edad2) {
        ZonePrint.innerText = `Resultado: ${nombre2}`;
        console.log(inpNombre2);
    } else {
        ZonePrint.innerText = `Resultado: Tienen la misma edad`;
    }
}