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
            respuesta: "Grecia: Todo varón libre, adulto nacido en la ciudad...\n\nCon la caída del Imperio Romano: La figura del ciudadano perdió fuerza y casi desapareció\n\nCon La Revolución Francesa y la de USA: Esta última fue la que más huella dejó, por su idea de libertad...",
            tipo: "oral"
        },
        {
            pregunta: "Los Pasos Más Importantes del Sufragio Argentino",
            respuesta: "La Ley 140 Régimen Electoral Nacional\n\nLa Ley 8877 Sistema de Elecciones Nacionales\n\nLa Ley 13010 Ley del Voto Femenino\n\nLa Ley 26774 Ley de Ciudadanía Argentina\n\n(Explicación de cada una)",
            tipo: "oral"
        },
        {
            pregunta: "¿Cuáles son las características del sufragio? Explica cada una",
            respuesta: "Universal: Todos los ciudadanos mayores de edad pueden participar en la conducción del partido\n\nIgualdad: Cada voto tiene el mismo valor y peso\n\nSecreto: Los Votos se emiten en secreto para evitar extensiones\n\nObligatorio: Votar es un mandato constitucional",
            tipo: "oral"
        },
        {
            pregunta: "¿Cuáles son los valores de la democracia como forma de vida? ¿En qué ámbitos se deben poner en juego?",
            opciones: [
                "1- Voto\n\n2- Paz\n\n3- Libertad",
                
                "1- Trabajo\n\n2- Peronismo\n\n3- Igualdad",
                
                "1- Democracia\n\n2- Constitución\n\n3- Derechos",
                
                "1- Tolerancia\n\n2- Respeto\n\n3- Solidaridad\n\nEstos valores se deben poner en juego en todos los ámbitos de la vida: familia, escuela, trabajo, etc."
            ],
            respuestaCorrecta: 3,
            tipo: "opcionMultiple"
        },
        {
            pregunta: "¿Cuáles son las características de la democracia como forma de vida?",
            respuesta: "El respeto a los derechos de las personas\n\nLa igualdad de oportunidades\n\nLa Búsqueda por el bien común\n\nLa limitación del poder\n\nLa tolerancia",
            tipo: "oral"
        },
        {
            pregunta: "¿Qué es la democracia plena y justicia social?",
            respuesta: "Los Cinco derechos que hayas estudiado",
            tipo: "oral"
        },
        {
            pregunta: "¿Cuáles son las características de los derechos humanos? ¿Por qué están relacionados los derechos con las obligaciones?",
            respuesta: "1- Son derechos materiales por el hecho de que somos humanos\n\n2- Son universales ya que se reconocen para todas las personas\n\n3- Su cumplimiento es obligatorio",
            tipo: "oral"
        },
        {
            pregunta: "Cinco derechos de la declaración de derechos humanos",
            respuesta: "Los Cinco derechos que hayas estudiado",
            tipo: "oral"
        },
        {
            pregunta: "Según el cuadro de las tres generaciones ¿qué valores se defienden y cómo se relacionan estos valores con los derechos de su generación?",
            respuesta: "Primera Generación: Libertades Individuales\nLa libertad individual se refiere a que cada persona tiene derechos individuales, o sea... Se relaciona con el derecho a votar.\n\nSegunda Generación: Igualdad de Oportunidades\nTodos los ciudadanos tienen los mismos derechos, sin importar sus características. Se relacionan con el derecho a la salud ya que todos lo tienen.\n\nTercera Generación: Paz y Solidaridad\nLa Paz y Solidaridad dependen de uno mismo por ejemplo (El derecho a un ambiente limpio, depende de las personas)",
            tipo: "oral"
        },
        {
            pregunta: "¿Qué es una Constitución y para qué sirve?",
            respuesta: "Es la ley de leyes y deben someterse tanto los gobernantes como los gobernados, y sirve para organizar el país y proteger los derechos de los habitantes",
            tipo: "oral"
        },
        {
            pregunta: "¿Qué debe tener toda Constitución?",
            respuesta: "1- Un texto que declare su propia supremacía sobre todas las otras normas\n\n2- Una declaración de derechos de todos los habitantes de ese país\n\n3- Normas que establezcan un gobierno dividido en tres poderes: legislativo, ejecutivo y judicial\n\n4- El modo en el que la Constitución debe reformarse en el futuro",
            tipo: "oral"
        },
        {
            pregunta: "¿Qué tipos y subtipos de formas de gobierno existen? ¿Cuáles son las características de república?",
            respuesta: "Existen dos formas de gobierno:\n\nLas Monarquías y las Repúblicas\n\nDentro de las monarquías hay dos subtipos:\n\n1- Las absolutas: el rey tiene autoridad concentrada, un gobierno sin límites jurídicos y su cargo es vitalicio y hereditario.\n\n2- La Parlamentaria: El monarca tiene autoridad limitada por el cuerpo legislativo",
            tipo: "oral"
        }
    ];

    let preguntasUsadas = [];

    function obtenerPreguntaAleatoria() {
        if (preguntasUsadas.length === 10) {
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
                <div class="puntaje-final">¡Juego terminado! Puntaje final: ${puntaje} de 10</div>
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
