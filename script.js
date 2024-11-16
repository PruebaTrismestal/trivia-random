// Esperar a que el documento esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Variables y elementos del DOM
    const elementoPregunta = document.getElementById('pregunta');
    const elementoOpciones = document.getElementById('opciones');
    const botonSiguiente = document.getElementById('siguiente');
    const elementoPuntaje = document.getElementById('puntos');
    let puntaje = 0;

    // Array de preguntas
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Francia?",
            opciones: ["Londres", "Madrid", "París", "Berlín"],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
            opciones: ["1939", "1940", "1941", "1938"],
            respuestaCorrecta: 0
        },
        {
            pregunta: "¿Cuál es el planeta más grande del sistema solar?",
            opciones: ["Marte", "Venus", "Saturno", "Júpiter"],
            respuestaCorrecta: 3
        }
    ];

    let preguntasUsadas = [];

    // Función para obtener pregunta aleatoria
    function obtenerPreguntaAleatoria() {
        if (preguntasUsadas.length === preguntas.length) {
            return null;
        }
        let indice;
        do {
            indice = Math.floor(Math.random() * preguntas.length);
        } while (preguntasUsadas.includes(indice));
        
        preguntasUsadas.push(indice);
        return preguntas[indice];
    }

    // Función para mostrar pregunta
    function mostrarPregunta(pregunta) {
        elementoPregunta.textContent = pregunta.pregunta;
        elementoOpciones.innerHTML = '';
        
        pregunta.opciones.forEach((opcion, index) => {
            const boton = document.createElement('button');
            boton.textContent = opcion;
            boton.classList.add('opcion');
            boton.onclick = () => verificarRespuesta(index, pregunta.respuestaCorrecta);
            elementoOpciones.appendChild(boton);
        });
    }

    // Función para verificar respuesta
    function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
        const botones = elementoOpciones.getElementsByClassName('opcion');
        
        for (let boton of botones) {
            boton.disabled = true;
        }
        
        if (respuestaUsuario === respuestaCorrecta) {
            botones[respuestaUsuario].classList.add('correcta');
            puntaje++;
            elementoPuntaje.textContent = puntaje;
        } else {
            botones[respuestaUsuario].classList.add('incorrecta');
            botones[respuestaCorrecta].classList.add('correcta');
        }
        
        botonSiguiente.style.display = 'block';
    }

    // Event listener para el botón siguiente
    botonSiguiente.onclick = function() {
        const pregunta = obtenerPreguntaAleatoria();
        if (pregunta) {
            mostrarPregunta(pregunta);
            this.style.display = 'none';
        } else {
            elementoPregunta.textContent = `¡Juego terminado! Puntaje final: ${puntaje}`;
            elementoOpciones.innerHTML = '';
            this.textContent = 'Reiniciar';
            this.onclick = function() {
                location.reload();
            };
        }
    };
});
// Asegurarse de que el botón esté visible al inicio
document.addEventListener('DOMContentLoaded', function() {
    botonSiguiente.textContent = 'Comenzar';
    botonSiguiente.style.display = 'block';
});
