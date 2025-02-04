// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const Amigo = document.getElementById('amigo');
    const nombre = Amigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingrese un nombre.');
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    listaAmigos.push(nombre);
    Amigo.value = ''; // Limpiar la caja

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaNombre = document.getElementById('listaAmigos');
    listaNombre.innerHTML = ''; // limpiar lista de amigos

    listaAmigos.forEach((amigo, index) => {
        const lista = document.createElement('li');
        lista.textContent = `${index + 1}. ${amigo}`;
        listaNombre.appendChild(lista);
    });
}

function sortearAmigo() {
    if (listaAmigos.length <= 1) {
        alert('Se requieren más nombres antes de sortear.');
        return;
    }

    const winnerSorteo = Math.floor(Math.random() * listaAmigos.length);
    const winner = listaAmigos[winnerSorteo];

    // Mostrar ganador
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="winner">¡El amigo secreto es: <strong>${winner}</strong>!</li>`;

    listaAmigos = []; // Resetear el arreglo (array)
    actualizarListaAmigos(); // Limpiar la lista mostrada
    reiniciarInput();
}

function reiniciarInput() {
    const inputAmigo = document.getElementById('amigo');
    inputAmigo.value = ''; // Limpiar caja
}

function validarEntrada(event) {
    const inputAmigo = document.getElementById('amigo');
    const valor = inputAmigo.value;

    // Verificar si el valor introducido es un número
    if (/\d/.test(valor)) {
        inputAmigo.value = valor.replace(/\d/g, ''); // Borrar números
        alert('No se permiten números en los nombres.');
    }
}