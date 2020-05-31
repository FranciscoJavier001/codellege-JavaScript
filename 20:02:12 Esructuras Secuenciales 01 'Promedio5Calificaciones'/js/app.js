// Dada la matricula y 5 calificaciones de un alumno obtenidas a lo largo del semestre, Realizar el Pseudocodigo que imprima la matricula del alumno y el promedio de sus calificaciones.

let mat1, mat2, mat3, mat4, mat5, promedio, matricula;

let btnPromedio = document.getElementById('btnCalcularPromedio');
btnPromedio.addEventListener('click', calcularPromedio);

function calcularPromedio() {
    matricula = document.getElementById('inpMatricula').value;
    // console.log(matricula);

    mat1 = Number(document.getElementById('inpMat1').value);
    mat2 = Number(document.getElementById('inpMat2').value);
    mat3 = Number(document.getElementById('inpMat3').value);
    mat4 = Number(document.getElementById('inpMat4').value);
    mat5 = Number(document.getElementById('inpMat5').value);

    promedio = (mat1 + mat2 + mat3 + mat4 + mat5) / 5;

    let imprimir = document.getElementById('imprimePromedio');
    imprimir.innerText = `Matricula: ${matricula}
        Promedio: ${promedio}`;
}