document.addEventListener('DOMContentLoaded', function() {
    const elementoPregunta = document.getElementById('pregunta');
    const elementoOpciones = document.getElementById('opciones');
    const botonSiguiente = document.getElementById('siguiente');
    const elementoPuntaje = document.getElementById('puntos');
    let puntaje = 0;

    // Array de preguntas sobre la Segunda Guerra Mundial
    const preguntas = [
        {
            pregunta: "¿En qué año comenzó la Segunda Guerra Mundial?",
            opciones: ["1939", "1940", "1941", "1938"],
            respuestaCorrecta: 0
        },
        {
            pregunta: "¿Quién era el líder de la Alemania Nazi durante la Segunda Guerra Mundial?",
            opciones: ["Joseph Stalin", "Adolf Hitler", "Winston Churchill", "Benito Mussolini"],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué evento marcó la entrada de Estados Unidos en la Segunda Guerra Mundial?",
            opciones: ["La invasión de Polonia", "La batalla de Stalingrado", "El ataque a Pearl Harbor", "La batalla de Inglaterra"],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿En qué año terminó la Segunda Guerra Mundial?",
            opciones: ["1944", "1945", "1946", "1943"],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué ciudad japonesa fue la primera en ser atacada con una bomba atómica?",
            opciones: ["Nagasaki", "Tokio", "Hiroshima", "Osaka"],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Cuál fue el nombre en clave del desembarco de Normandía?",
            opciones: ["Operación Market Garden", "Operación Overlord", "Operación Barbarroja", "Operación Torch"],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué batalla fue considerada el punto de inflexión en el frente oriental?",
            opciones: ["Batalla de Berlín", "Batalla de Moscú", "Batalla de Stalingrado", "Batalla de Kursk"],
            respuestaCorrecta: 2
        },
        {
            pregunta: "¿Qué alianza de países se conocía como el 'Eje'?",
            opciones: ["URSS-EE.UU.-Reino Unido", "Alemania-Italia-Japón", "Francia-Polonia-Bélgica", "China-India-Australia"],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Quién fue el Primer Ministro británico durante la mayor parte de la guerra?",
            opciones: ["Neville Chamberlain", "Winston Churchill", "Clement Attlee", "Anthony Eden"],
            respuestaCorrecta: 1
        },
        {
            pregunta: "¿Qué nombre recibió el programa nazi de exterminio sistemático de judíos?",
            opciones: ["La Solución Final", "La Gran Purga", "El Plan Maestro", "La Operación Cóndor"],
            respuestaCorrecta: 0
        }
    ];

    let preguntasUsadas = [];

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

    botonSiguiente.onclick = function() {
        const pregunta = obtenerPreguntaAleatoria();
        if (pregunta) {
            mostrarPregunta(pregunta);
            this.style.display = 'none';
        } else {
            let mensajeFinal = '';
            if (puntaje >= 8) {
                mensajeFinal = '¡¡Felicidades, se nota que estudiaste!!';
            } else if (puntaje >= 6) {
                mensajeFinal = '¡Felicidades, aprobaste!';
            } else if (puntaje >= 4) {
                mensajeFinal = 'Oh no, reprobaste. Estudia más';
            } else {
                mensajeFinal = 'No estudiaste nada';
            }

            elementoPregunta.textContent = `¡Juego terminado! Puntaje final: ${puntaje} de ${preguntas.length}. ${mensajeFinal}`;
            elementoOpciones.innerHTML = '';
            this.textContent = 'Reiniciar';
            this.onclick = function() {
                location.reload();
            };
        }
    };

    // Aseguramos que el botón inicial diga "Comenzar"
    botonSiguiente.textContent = 'Comenzar';
});
