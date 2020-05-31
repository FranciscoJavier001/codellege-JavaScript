let base, altura, area;

let btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', calculaArea);

function calculaArea() {
    base = Number(document.getElementById('inpBase').value);
    altura = Number(document.getElementById('inpAltura').value);
    area = (base * altura) / 2;
    console.log(area);

    let ZonePrint = document.getElementById('zonePrint');
    ZonePrint.innerText = `Area del Triangulo: ${area}u²`;
}