/* Se requiere un algoritmo para obetener la edad promedio de un grupo de N alumnos */

EventListener();

function EventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', iniciarAplicacion);
}


function iniciarAplicacion() {
    let NumeroAlumnos = Number(prompt('Cuantos alumnos son? '));

    let acumulador = 0;
    for (let i = 1; i <= NumeroAlumnos; i++) {
        let edad = Number(prompt(`Ingresa la edad del alumno ${i}`));
        // acumulador = acumulador + edad;
        acumulador += edad;
    }
    let resultado = acumulador / NumeroAlumnos;
    // console.log(resultado);

    ZonaPrint.innerText = `Cantidad de alumnos: ${NumeroAlumnos} 
    Promedio de Edades: ${resultado}`;

}