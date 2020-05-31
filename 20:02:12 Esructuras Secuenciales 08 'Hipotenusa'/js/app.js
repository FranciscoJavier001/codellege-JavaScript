// Se requiere determinar la hipotenusa de un triángulo rectángulo. Recuerde que por Pitágoras se tiene que: C2 = A2 + B2.

let cat1, cat2, hip;

let btnCalcular = document.getElementById('calcularHipotenusa');
btnCalcular.addEventListener('click', calHipotenusa);

function calHipotenusa() {
    cat1 = Number(document.getElementById('inpCatetoA').value);
    cat2 = Number(document.getElementById('inpCatetoB').value);
    hip = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));

    let mostrarHipotenusa = document.getElementById('zonePrint');
    mostrarHipotenusa.innerText = `Hipotenusa: ${hip}`;
}