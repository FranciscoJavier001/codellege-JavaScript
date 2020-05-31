// Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con base en los metros que requiere.

let metros, pulgadas;

const pulMet = 39.37;

let btnCalcular = document.getElementById('calcularPulgadas');
btnCalcular.addEventListener('click', calPulgadas);

function calPulgadas() {
    metros = Number(document.getElementById('inpMetros').value);
    pulgadas = metros * pulMet;

    let mostrarResultado = document.getElementById('mostrarPulgadas');
    mostrarResultado.innerText = `Total Pulgadas: ${pulgadas}`;
}