// Se necesita un programa que solicite el numero de respuestas correctas, incorrectas y en blanco, correspondientes a postulantes, y muestre su puntaje final considerado, que por cada respuesta correcta tendrá 4 puntos, respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0.

let correctas, incorrectas, resultado;

let btnCalculo = document.getElementById('calculaCalificacion');
btnCalculo.addEventListener('click', resultados);

function resultados() {
    correctas = Number(document.getElementById('inpCorrectas').value);
    incorrectas = Number(document.getElementById('inpIncorrectas').value);

    correctas = correctas * 4;
    incorrectas = incorrectas * -1;

    resultado = correctas + incorrectas;

    let mostrarResultado = document.getElementById('mostrarResultado');
    mostrarResultado.innerText = `Calificacion Final: ${resultado}`;
}