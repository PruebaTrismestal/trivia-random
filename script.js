// ... código existente ...

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
    },
    {
        pregunta: "¿Cuál es el océano más grande?",
        opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿En qué año se fundó Google?",
        opciones: ["1998", "2000", "1995", "2001"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
        opciones: ["Húmero", "Fémur", "Tibia", "Radio"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el país más grande del mundo?",
        opciones: ["China", "Estados Unidos", "Canadá", "Rusia"],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Cuál es el animal terrestre más rápido?",
        opciones: ["Guepardo", "León", "Antílope", "Tigre"],
        respuestaCorrecta: 0
    }
];

// Función mejorada para obtener preguntas aleatorias
function obtenerPreguntaAleatoria() {
    const preguntasDisponibles = preguntas.filter((_, index) => !preguntasUsadas.includes(index));
    
    if (preguntasDisponibles.length === 0) {
        // Si ya se usaron todas las preguntas, reiniciar el juego
        preguntasUsadas = [];
        elementoPregunta.textContent = '¡Has completado todas las preguntas! Tu puntaje final es: ' + puntaje;
        elementoOpciones.innerHTML = '';
        botonSiguiente.textContent = 'Reiniciar Juego';
        return null;
    }

    // Seleccionar una pregunta aleatoria de las disponibles
    const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);
    const indicePregunta = preguntas.indexOf(preguntasDisponibles[indiceAleatorio]);
    preguntasUsadas.push(indicePregunta);
    
    // Mezclar el orden de las opciones
    const preguntaSeleccionada = {...preguntas[indicePregunta]};
    const opcionesMezcladas = [...preguntaSeleccionada.opciones];
    
    // Algoritmo Fisher-Yates para mezclar las opciones
    for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
    }
    
    // Actualizar la respuesta correcta según el nuevo orden
    const respuestaCorrectaOriginal = preguntaSeleccionada.opciones[preguntaSeleccionada.respuestaCorrecta];
    preguntaSeleccionada.respuestaCorrecta = opcionesMezcladas.indexOf(respuestaCorrectaOriginal);
    preguntaSeleccionada.opciones = opcionesMezcladas;
    
    return preguntaSeleccionada;
}

// ... resto del código existente ...
