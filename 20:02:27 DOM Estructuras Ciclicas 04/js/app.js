function eventListener() {
    const button = document.getElementById('btnInit');
    button.addEventListener('click', initApplication);
}

eventListener()

function initApplication() {
    let Acumulador = 0;

    const listGroup = document.getElementById('ListaAhorro');

    for (let i = 1; i <= 3; i++) {
        let saving = Number(prompt('Cual es tu ahorro del mes?'));

        Acumulador += saving;

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = `El dinero ahorrado en el mes #${i} es $${Acumulador}`;

        listGroup.appendChild(li);
    }

    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item bg-danger');
    li.innerText = (`Tu ahorro anual es de: ${Acumulador}`);

    listGroup.appendChild(li);
}