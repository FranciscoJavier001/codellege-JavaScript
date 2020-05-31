// Se tiene los puntos A y B en el cuadrante positivo del plano cartesiano, elabore el algoritmo que permite obtener la distancia entre A y B.

let a, b, distancia;

let btnCalcular = document.getElementById('calcularDistancia');
btnCalcular.addEventListener('click', generarDistancia);

function generarDistancia() {
    a = Number(document.getElementById('inpA').value);
    b = Number(document.getElementById('inpB').value);

    console.log(a, b);

    distancia = b - a;

    let mostrarDistancia = document.getElementById('mostrarDistancia');
    mostrarDistancia.innerText = `Distancia entre A y B: ${distancia}`
}