// 1. Selección de elementos del DOM
const input = document.getElementById('tareaInput');
const boton = document.getElementById('btnAgregar');
const lista = document.getElementById('listaTareas');

// 2. Función principal para agregar la tarea
const agregarTarea = () => {
    const textoTarea = input.value.trim(); // .trim() elimina espacios vacíos al inicio/final

    // Validación: que no esté vacío
    if (textoTarea === "") {
        alert("Por favor, escribe una tarea válida.");
        return;
    }

    // 3. Crear el elemento <li> (Objeto del DOM)
    const nuevaTarea = document.createElement('li');

    // Usamos innerHTML para meter el texto y el botón de borrar al mismo tiempo
    nuevaTarea.innerHTML = `
        <span class="texto-tarea">${textoTarea}</span>
        <button class="btn-eliminar">Eliminar</button>
    `;

    // 4. Lógica para el "Chulito" (Marcar como completada)
    // Buscamos el span dentro del li que acabamos de crear
    const spanTexto = nuevaTarea.querySelector('.texto-tarea');
    spanTexto.addEventListener('click', () => {
        // Toggle agrega la clase si no está, y la quita si ya está
        spanTexto.classList.toggle('completada');
    });

    // 5. Lógica para Eliminar la tarea
    const botonEliminar = nuevaTarea.querySelector('.btn-eliminar');
    botonEliminar.addEventListener('click', () => {
        nuevaTarea.remove();
    });

    // 6. Inyectar la tarea en la lista del HTML
    lista.appendChild(nuevaTarea);

    // 7. Limpiar el campo y devolver el foco para seguir escribiendo
    input.value = "";
    input.focus();
};

// 8. Evento del botón principal
boton.addEventListener('click', agregarTarea);

// EXTRA: Permitir agregar tarea presionando la tecla "Enter"
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});