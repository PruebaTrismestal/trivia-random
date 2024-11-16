document.addEventListener('DOMContentLoaded', function() {
    const elementoPregunta = document.getElementById('pregunta');
    const elementoOpciones = document.getElementById('opciones');
    const botonSiguiente = document.getElementById('siguiente');
    const elementoPuntaje = document.getElementById('puntos');
    let puntaje = 0;
    let preguntaActual = null;

    const preguntas = [
        {
            pregunta: "Además del voto, ¿Qué otras condiciones deben darse en un país democrático?",
            opciones: [
                "1- Solo una persona puede presentarse como candidato en todas las elecciones.\n\n2- Las elecciones son periódicas, pero no son libres ni competitivas.\n\n3- No existe la separación de poderes entre el ejecutivo, legislativo y judicial.\n\n4- No hay garantía de derechos civiles ni libertad de asociación.",
                
                "1- El poder judicial depende completamente del ejecutivo.\n\n2- Los ciudadanos no tienen derecho a protestar ni a organizarse.\n\n3- No se permiten elecciones libres, solo referendos.\n\n4- Los derechos humanos no son respetados de manera plena.",
                
                "1- Que Los Gobernantes Representen a la mayoría\n\n2- Que ejerzan el poder por un tiempo limitado y luego son reemplazados por otros\n\n3- Que ejerzan poder en forma absoluta\n\n4- Que haya diferentes opciones, ideas políticas y opiniones",
                
                "1- El gobierno es elegido por un solo partido político.\n\n2- Los derechos de expresión están restringidos para evitar el desorden.\n\n3- Las elecciones son manipuladas para asegurar el resultado deseado.\n\n4- Los medios de comunicación son controlados por el gobierno."
            ],
            respuestaCorrecta: 2,
            tipo: "opcionMultiple"
        },
        {
            pregunta: "¿Cuándo una democracia es directa y representativa?",
            respuesta: "En la Atenas antigua, los ciudadanos participaban directamente de las decisiones del gobierno.\n\nLos varones de Atenas, se encontraban, discutían y dialogaban sobre los asuntos públicos donde se votaban las ideas populares. Esta se llama Democracia Directa.\n\nLa Democracia representativa consiste en que los ciudadanos eligen un conjunto de representantes (como diputados, presidente, senadores, etc).",
            tipo: "oral"
        },
        {
            pregunta: "¿Cuáles son los modos de participación directa de la gente que tenemos en Argentina?",
            respuesta: "La Iniciativa Popular: Los ciudadanos pueden presentar un proyecto de ley para que sea tratado por el congreso de la nación.\n\nLa Consulta Popular: Los ciudadanos son consultados sobre alguna decisión importante para el futuro del país.",
            tipo: "oral"
        },
        {
            pregunta: "¿Cuáles son las épocas más importantes dentro de la evolución del concepto de ciudadano?",
            opciones: [
                // Aquí irán las opciones cuando las proporciones
            ],
            respuestaCorrecta: 0,
            tipo: "opcionMultiple"
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

    function mostrarPreguntaOpcionMultiple(pregunta) {
        elementoPregunta.textContent = pregunta.pregunta;
        elementoOpciones.innerHTML = '';
        
        let opcionesConIndices = pregunta.opciones.map((opcion, index) => ({
            texto: opcion,
            indice: index
        }));
        
        for (let i = opcionesConIndices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesConIndices[i], opcionesConIndices[j]] = [opcionesConIndices[j], opcionesConIndices[i]];
        }
        
        opcionesConIndices.forEach((opcion) => {
            const boton = document.createElement('button');
            boton.textContent = opcion.texto;
            boton.classList.add('opcion');
            boton.setAttribute('data-indice', opcion.indice);
            boton.onclick = () => verificarRespuesta(opcion.indice, pregunta.respuestaCorrecta);
            elementoOpciones.appendChild(boton);
        });
    }

    function mostrarPreguntaOral(pregunta) {
        elementoPregunta.textContent = pregunta.pregunta;
        elementoOpciones.innerHTML = '';
        
        const botonVerRespuesta = document.createElement('button');
        botonVerRespuesta.textContent = 'Ver Respuesta';
        botonVerRespuesta.classList.add('btn-siguiente');
        botonVerRespuesta.onclick = () => mostrarRespuestaOral(pregunta.respuesta);
        elementoOpciones.appendChild(botonVerRespuesta);
    }

    function mostrarRespuestaOral(respuesta) {
        elementoOpciones.innerHTML = `
            <div class="respuesta-oral">${respuesta.replace(/\n/g, '<br>')}</div>
            <div class="botones-evaluacion">
                <button class="btn-evaluacion correcto">Respondí Correctamente</button>
                <button class="btn-evaluacion incorrecto">Me Equivoqué</button>
            </div>
        `;

        const botonesEvaluacion = elementoOpciones.getElementsByClassName('btn-evaluacion');
        for (let boton of botonesEvaluacion) {
            boton.onclick = (e) => {
                if (e.target.classList.contains('correcto')) {
                    puntaje++;
                    elementoPuntaje.textContent = puntaje;
                }
                for (let b of botonesEvaluacion) {
                    b.disabled = true;
                }
                botonSiguiente.style.display = 'block';
                botonSiguiente.textContent = 'Siguiente Pregunta';
            };
        }
    }

    function verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
        const botones = elementoOpciones.getElementsByClassName('opcion');
        
        for (let boton of botones) {
            boton.disabled = true;
            const indiceBoton = parseInt(boton.getAttribute('data-indice'));
            
            if (indiceBoton === respuestaUsuario) {
                boton.classList.add(respuestaUsuario === respuestaCorrecta ? 'correcta' : 'incorrecta');
            }
            if (indiceBoton === respuestaCorrecta) {
                boton.classList.add('correcta');
            }
        }
        
        if (respuestaUsuario === respuestaCorrecta) {
            puntaje++;
            elementoPuntaje.textContent = puntaje;
        }
        
        botonSiguiente.style.display = 'block';
        botonSiguiente.textContent = 'Siguiente Pregunta';
    }

    botonSiguiente.onclick = function() {
        // Si es la primera vez que se hace clic en el botón
        if (this.textContent === 'Comenzar') {
            elementoPregunta.innerHTML = `
                <div class="mensaje-inicial">
                    En las preguntas que aparezca la opción de "Ver Respuesta", antes de tocar el botón hay que responder oralmente y luego tocar el botón para verificar si es correcta.
                </div>
            `;
            this.textContent = 'Entendido, ¡Empecemos!';
            return;
        }
        
        // Si es el segundo clic (después de mostrar las instrucciones)
        if (this.textContent === 'Entendido, ¡Empecemos!') {
            const pregunta = obtenerPreguntaAleatoria();
            if (pregunta) {
                if (pregunta.tipo === "opcionMultiple") {
                    mostrarPreguntaOpcionMultiple(pregunta);
                } else {
                    mostrarPreguntaOral(pregunta);
                }
                this.style.display = 'none';
            }
            return;
        }

        // Código para las siguientes preguntas
        const pregunta = obtenerPreguntaAleatoria();
        if (pregunta) {
            if (pregunta.tipo === "opcionMultiple") {
                mostrarPreguntaOpcionMultiple(pregunta);
            } else {
                mostrarPreguntaOral(pregunta);
            }
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

            elementoOpciones.innerHTML = '';
            elementoPregunta.innerHTML = `
                <div class="puntaje-final">¡Juego terminado! Puntaje final: ${puntaje} de ${preguntas.length}</div>
                <div class="mensaje-final">${mensajeFinal}</div>
            `;
            
            this.textContent = 'Reiniciar';
            this.onclick = function() {
                location.reload();
            };
        }
    };

    botonSiguiente.textContent = 'Comenzar';
});
