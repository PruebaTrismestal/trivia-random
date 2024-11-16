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
    },
    {
        pregunta: "¿Cuál es el elemento químico más abundante en el universo?",
        opciones: ["Oxígeno", "Hidrógeno", "Helio", "Carbono"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Van Gogh", "Miguel Ángel", "Leonardo da Vinci", "Pablo Picasso"],
        respuestaCorrecta: 2
    }
];

// Variables globales
let puntaje = 0;
let preguntasUsadas = [];

// Elementos del DOM
const elementoPregunta = document.getElementById('pregunta');
const elementoOpciones = document.getElementById('opciones');
const botonSiguiente = document.getElementById('siguiente');
const elementoPuntaje = document.getElementById('puntos');

// Función para obtener pregunta aleatoria
function obtenerPreguntaAleatoria() {
    const preguntasDisponibles = preguntas.filter((_, index) => !preguntasUsadas.includes(index));
    
    if (preguntasDisponibles.length === 0) {
        preguntasUsadas = [];
        return null;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);
    const indicePregunta = preguntas.indexOf(preguntasDisponibles[indiceAleatorio]);
    preguntasUsadas.push(indicePregunta);
    return preguntas[indicePregunta];
}

// Función para mostrar la pregunta
function mostrarPregunta(pregunta) {
    elementoPregunta.textContent = pregunta.pregunta;
    elementoOpciones.innerHTML = '';
    
    pregunta.opciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.classList.add('opcion');
        boton.addEventListener('click', () => verificarRespuesta(index, pregunta.respuestaCorrecta));
        elementoOpciones.appendChild(boton);
    });
}

// Función para verificar la respuesta
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
    botonSiguiente.textContent = 'Siguiente Pregunta';
}

// Event listener para el botón
botonSiguiente.addEventListener('click', function() {
    if (botonSiguiente.textContent === 'Comenzar') {
        const pregunta = obtenerPreguntaAleatoria();
        if (pregunta) {
            mostrarPregunta(pregunta);
            botonSiguiente.style.display = 'none';
        }
    } else {
        const pregunta = obtenerPreguntaAleatoria();
        if (pregunta) {
            mostrarPregunta(pregunta);
            botonSiguiente.style.display = 'none';
        } else {
            elementoPregunta.textContent = '¡Juego terminado! Tu puntaje final es: ' + puntaje;
            elementoOpciones.innerHTML = '';
            botonSiguiente.textContent = 'Reiniciar Juego';
            puntaje = 0;
            elementoPuntaje.textContent = puntaje;
        }
    }
});

// Asegurarse de que el botón esté visible al inicio
document.addEventListener('DOMContentLoaded', function() {
    botonSiguiente.textContent = 'Comenzar';
    botonSiguiente.style.display = 'block';
});
