/*
Diseñe un algoritmo que lea tres longitudes y determine si forman o no un triángulo. Si es un triángulo determine de qué tipo de triángulo se trata entre: equilátero (si tiene tres lados iguales), isósceles (si tiene dos lados iguales) o escaleno (si tiene tres lados desiguales). Considere que para formar un triángulo se requiere que: "el lado mayor sea menor que la suma de los otros dos lados".
*/

const button = document.getElementById('btnAnalizar');
button.addEventListener('click', analizarFigura);

function analizarFigura() {
    const ladoMayor = Number(document.getElementById('inpLadoMayor').value);
    const ladoA = Number(document.getElementById('inpLadoA').value);
    const ladoB = Number(document.getElementById('inpLadoB').value);

    const ZonePrint = document.getElementById('zonePrint');

    let sumaLados = ladoA + ladoB;

    if (ladoMayor > sumaLados) {
        ZonePrint.innerText = `Tipo: Este no es un Triangulo`
    } else {
        if (ladoMayor == ladoA && ladoMayor == ladoB && ladoA == ladoB) {
            ZonePrint.innerText = `Tipo: Este es un Triangulo Equilatero`
        } else if (ladoMayor == ladoA || ladoMayor == ladoB || ladoA == ladoB) {
            ZonePrint.innerText = `Tipo: Este es un Triangulo Isósceles`
        } else
            ZonePrint.innerText = `Tipo: Este es un Triangulo Escaleno`
    }
}