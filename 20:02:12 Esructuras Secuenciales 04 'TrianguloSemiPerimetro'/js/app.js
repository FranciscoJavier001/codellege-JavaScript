// Elabore un algoritmo que lea los 3 lados de un triangulo cualquiera y calcule su área, considerar: Si A, B y C son los lados y S el semiperimetro.

let ladoA, ladoB, ladoC, semiperimetro;
var area;

let btnCalcular = document.getElementById('calcularArea');
btnCalcular.addEventListener('click', generaArea);

function generaArea() {
    ladoA = Number(document.getElementById('inpLadoA').value);
    ladoB = Number(document.getElementById('inpLadoB').value);
    ladoC = Number(document.getElementById('inpLadoC').value);

    semiperimetro = (ladoA + ladoB + ladoC) / 2;

    area = Math.sqrt((semiperimetro * (semiperimetro - ladoA)) * (semiperimetro - ladoB) * (semiperimetro - ladoC));
    console.log(area);


    let mostarResultado = document.getElementById('mostrarResultado');
    mostarResultado.innerText = `Semiperimetro: ${semiperimetro}
    Area Triangulo: ${area.toFixed(2)}`;
}