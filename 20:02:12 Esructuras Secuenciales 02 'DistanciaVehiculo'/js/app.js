// Se desea calcular la distancia recorrida (m) por un móvil que tiene velocidad constante (m/s) durante un tiempo T (Sg), considerar que es un movimiento rectilíneo uniforme.

let velocidad, tiempo, distancia;

let btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularTV);

function calcularTV() {
    velocidad = Number(document.getElementById('inpVelocidad').value);
    tiempo = Number(document.getElementById('inpTiempo').value);

    distancia = velocidad * tiempo;

    let resultado = document.getElementById('imprimeDistancia');
    resultado.innerText = `Distancia Recorrida: ${distancia} metros en ${tiempo} segundos`;
}