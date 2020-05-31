// Virtual
// .length: La longitud del array

// .push().- agrega elementos a la ultima posicion de un array
// Opcion 1. Tomar array principal y a cada index impar sustituirle su valor por un 0

// .pop().- elimina el elemento en la ultima posicion del array
// Opcion 2: Eliminar el ultimo elemento del array
// .unshift()
// Opcion 3: Agregar un elemento a la primera posicion del array
// .shift()
// Opcion 4: Eliminar un elemento en la primera posicion del array

// indexOf()regresa un index en caso de que no exista regresar un -1
// Opcion 5: Encontrar todos los elementos con valor 10 y regresar en un array su posicion 
// .sort()
// Opcion 6: Ordenar 
// .reverse()
// Opcion 7: Regresar el mismo array pero invertido

// .splice()
// Opcion 8: Camiar todo lo 5 por 'cinco'

EventListener()
    // array principal
let array = []
let outArray = []

function EventListener() {
    document.getElementById('size').addEventListener('keypress', getSize)
    document.addEventListener('click', validarClick)
}

// e = event
function getSize(e) {
    if (e.key != 'Enter') return
    if (e.target.value == '') return
    if (isNaN(e.target.value)) return
    if (e.target.value <= 0) return

    createArray(e.target.value)
    e.target.value = ''
}

function createArray(size) {
    array = []
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (11 - 1) + 1))
    }
    console.log(array);
}

function validarClick(e) {

    // key es el valor a evaluar
    switch (e.target.id) {
        case 'op1':
            for (let i = 0; i < array.length; i++) {
                if ((i + 1) % 2 == 0) {
                    outArray.push(0)
                } else {
                    outArray.push(array[i])
                }
            }
            console.log(outArray);
            break;

        case 'op2':
            array.pop()
            console.log(array);
            break;

        case 'op3':
            let random = Math.floor(Math.random() * (11 - 1) + 1)
            array.unshift(`nuevos ${random}`)
            console.log(array);
            break;

        case 'op4':
            array.shift()
            console.log(array);
            break;

        case 'op5':
            let indices = []
            let index = array.indexOf(10)
            while (index != -1) {
                indices.push(index)
                index = array.indexOf(10, index + 1)
            }
            console.log(indices);
            break;

        case 'op6':
            // Numeros - Mayusculas - minusculas
            // [10Ricardo, FRANCISCO,francisco]
            console.log(array.sort());
            break;

        case 'op7':
            console.log(array.reverse());
            break;

        case 'op8':
            for (let i = 0; i <= array.length; i++) {
                if (array[i] == 5) {
                    array.splice(i, 1, 'cinco')
                }
                console.log(array);
            }
            break;

        default:
            return
            break;
    }
}