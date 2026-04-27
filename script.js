const input = document.getElementById('tareaInput');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');
const agregarTarea = () => {
    const textoTarea = input.value.trim();
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea válida.");
        return;
    }

    const nuevaTarea = document.createElement('li');
    nuevaTarea.innerHTML = `
        <span class="texto-tarea">${textoTarea}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;
    const spanTexto = nuevaTarea.querySelector('.texto-tarea');
    spanTexto.addEventListener('click', () => {
        spanTexto.classList.toggle('completada');
    });

    const botonEliminar = nuevaTarea.querySelector('.btn-eliminar');
    botonEliminar.addEventListener('click', () => {
        nuevaTarea.remove();
    });
    lista.appendChild(nuevaTarea);

    input.value = "";
    input.focus();
};

boton.addEventListener('click', agregarTarea);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});