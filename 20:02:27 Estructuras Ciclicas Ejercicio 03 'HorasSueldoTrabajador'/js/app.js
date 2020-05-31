/* Una empresa quiere el registro de las horas que trabaja diariamente un empleado durante la semana (seis días) y requiere determinar el total de estas, así como el sueldo que recibirá por las horas trabajadas */

function eventListener() {
    const button = document.getElementById('btnIniciar');
    button.addEventListener('click', initApplication);
}

eventListener()

function initApplication() {
    const sT = Number(prompt('¿Cual es el sueldo del Trabajador?')); //sueldoTrabajador
    let aH; //acumuladorHoras
    let res = 0;
    for (let i = 0; i < 6; i++) {
        const hT = Number(prompt('Ingresa las horas trabajadas')); //horasTrabajadas
        res += hT;
    }
    ZonePrint.innerText = "Sus horas trabajadas fueron " + res + " y su salario es $" + res * sT;
}

/* Primero hay que poner un for, que inicie en 1 hasta que i sea menor o igual a 6, luego hay que poner un contador donde se esten agregando todas las vueltas de las horas trabajadas, y tambien poner cuanto es su sueldo por hora y luego mostrar el total de las horas trbajadas......*/