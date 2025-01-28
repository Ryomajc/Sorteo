// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresSorteados = [];

//ingreso de nombre en lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let nombre = document.getElementById('amigo').value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return; // Detener la ejecución si el campo está vacío
    }

    // Actualizar el array de amigos
    nombresSorteados.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';

    // Mostrar la lista de amigos actualizada
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    // Obtener la referencia a la lista en el HTML
    let lista = document.getElementById('listaAmigos');
    lista.innerText = '';
    // Recorrer el arreglo de amigos y mostrar cada uno
    nombresSorteados.forEach(function(amigo) {
        let li = document.createElement('li');
        li.innerText = amigo;
        lista.appendChild(li);
    });
}
    function sortearAmigo() {
        let lista = document.getElementById('listaAmigos');
        // confirmar si hay amigos disponibles
        if (nombresSorteados.length === 0) {
            alert('No hay amigos para sortear. Por favor, agrega algunos primero.');
            return;
        }

        // Generar nombre aleatorio
        let indiceAleatorio = Math.floor(Math.random() * nombresSorteados.length);

        // Obtener nombre sorteado
        let amigoSorteado = nombresSorteados[indiceAleatorio];

        // Mostrar el resultado
        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
            // Limpiar la lista existente
    lista.innerHTML = ''; 
    }