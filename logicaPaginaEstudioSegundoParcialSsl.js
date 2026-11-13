/* ============ DATOS DEL QUIZ ============ */
const listaPreguntasQuiz = [
  {
    textoPregunta: "¿Qué reconoce un Autómata Finito con Pila?",
    opcionesRespuesta: ["Lenguajes regulares únicamente", "Lenguajes libres de contexto", "Lenguajes sensibles al contexto", "Cualquier lenguaje recursivamente enumerable"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Gramáticas tipo 2 (BNF) ⇔ AFP."
  },
  {
    textoPregunta: "¿Qué guarda c en: c = getchar() != EOF ?",
    opcionesRespuesta: ["El carácter leído", "0 o 1", "EOF", "Siempre 1"],
    indiceRespuestaCorrecta: 1,
    explicacion: "!= tiene mayor precedencia que =, entonces c recibe el resultado de la comparación."
  },
  {
    textoPregunta: "¿Cuál es la ER de un identificador de C?",
    opcionesRespuesta: ["[A-Za-z]+", "[A-Za-z_][A-Za-z0-9_]*", "[A-Za-z0-9_]+", "_?[0-9]*[A-Za-z]"],
    indiceRespuestaCorrecta: 1,
    explicacion: "No puede empezar con dígito; después admite letras, dígitos y _."
  },
  {
    textoPregunta: "¿Qué problema tiene E ::= E '+' T para un parser descendente recursivo?",
    opcionesRespuesta: ["Es ambigua", "Recursión a izquierda: loop infinito", "No tiene axioma", "Usa terminales"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Se reescribe como E → T { '+' T }."
  },
  {
    textoPregunta: "En f()+g()+h(), ¿qué garantiza C sobre el orden de evaluación?",
    opcionesRespuesta: ["Izquierda a derecha siempre", "Derecha a izquierda siempre", "Nada sobre el orden de los operandos", "Primero h()"],
    indiceRespuestaCorrecta: 2,
    explicacion: "La asociatividad agrupa, pero el orden de evaluación de operandos no está especificado."
  },
  {
    textoPregunta: "¿Por qué es ambigua la gramática de if / if-else?",
    opcionesRespuesta: ["Tiene dos axiomas", "El else puede asociarse a dos if distintos", "Falta el terminal ';'", "Tiene recursión a izquierda"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Dangling else: una cadena con dos árboles de derivación."
  },
  {
    textoPregunta: "¿Cuál NO es una implementación de máquina de estados pedida en el TP2?",
    opcionesRespuesta: ["enum + switch", "goto", "Funciones recursivas", "Tabla de transiciones"],
    indiceRespuestaCorrecta: 3,
    explicacion: "El TP2 prohíbe basarse en tabla o matriz."
  },
  {
    textoPregunta: "¿Qué función cumple ungetc en el scanner?",
    opcionesRespuesta: ["Borra el carácter del flujo", "Devuelve al flujo el carácter de lookahead", "Lee un entero", "Detecta EOF"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Permite que el siguiente token empiece con el carácter que cortó al actual."
  },
  {
    textoPregunta: "¿Por qué aⁿbⁿ no puede reconocerse con un AF?",
    opcionesRespuesta: ["Tiene demasiados estados", "Requiere contar ilimitadamente (memoria)", "Usa dos símbolos", "No tiene estado final"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Un AF tiene memoria finita; la pila del AFP permite contar."
  },
  {
    textoPregunta: "¿Qué tupla define un AFD?",
    opcionesRespuesta: ["(N, T, P, S)", "(Q, Σ, δ, q0, F)", "(Q, Σ, Γ, δ, q0, Z0, F)", "(Σ, L, R)"],
    indiceRespuestaCorrecta: 1,
    explicacion: "(N,T,P,S) es la gramática; la tercera opción es el AFP."
  },
  {
    textoPregunta: "En una BNF de expresiones, ¿cómo se logra que * tenga más precedencia que +?",
    opcionesRespuesta: ["Con paréntesis obligatorios", "Poniendo * en un nivel (no terminal) más profundo", "Con más terminales", "No se puede en BNF"],
    indiceRespuestaCorrecta: 1,
    explicacion: "term está dentro de expression: se agrupa antes."
  },
  {
    textoPregunta: "¿Cuál es el resultado de eliminar la recursión a izquierda de A → Aα | β?",
    opcionesRespuesta: ["A → βA' ; A' → αA' | ε", "A → αA | β", "A → β | α", "A → A'β"],
    indiceRespuestaCorrecta: 0,
    explicacion: "Genera el mismo lenguaje (β seguido de cero o más α) sin recursión a izquierda."
  },
  {
    textoPregunta: "¿Cuántos tipos de la jerarquía de Chomsky son reconocidos por un autómata con pila?",
    opcionesRespuesta: ["Tipo 0", "Tipo 1", "Tipo 2", "Tipo 3"],
    indiceRespuestaCorrecta: 2,
    explicacion: "Libres de contexto (tipo 2) ⇔ AFP."
  },
  {
    textoPregunta: "¿Por qué 0 no es una decimal-constant en C?",
    opcionesRespuesta: ["Porque es negativo", "Porque es una constante octal", "Porque no es entero", "Sí es decimal-constant"],
    indiceRespuestaCorrecta: 1,
    explicacion: "decimal-constant empieza con un dígito no nulo [1-9]."
  },
  {
    textoPregunta: "En el TP3, ¿qué hace el parser con cada no-terminal?",
    opcionesRespuesta: ["Lo ignora", "Lo implementa con una función", "Lo convierte en token", "Lo guarda en el scanner"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Análisis descendente recursivo: una función por no-terminal."
  },
  {
    textoPregunta: "¿Qué error detecta el scanner y cuál el parser?",
    opcionesRespuesta: ["Scanner: sintáctico; Parser: léxico", "Scanner: carácter inválido; Parser: token inesperado como 42+", "Ambos detectan los mismos", "Ninguno detecta errores"],
    indiceRespuestaCorrecta: 1,
    explicacion: "Léxico = caracteres/tokens inválidos; sintáctico = secuencia de tokens incorrecta."
  }
];

let cantidadRespuestasCorrectas = 0;
let cantidadPreguntasRespondidas = 0;

/* ============ PROGRESO DE ESTUDIO ============ */
function funcionActualizarProgresoEstudio() {
  const listaCasillasTema = document.querySelectorAll(".casillaTemaRepasado");
  const cantidadMarcadas = document.querySelectorAll(".casillaTemaRepasado:checked").length;
  const porcentaje = Math.round((cantidadMarcadas / listaCasillasTema.length) * 100);
  document.getElementById("barraProgresoEstudio").value = porcentaje;
  document.getElementById("textoProgresoEstudio").textContent = porcentaje + "% repasado";
}

/* ============ DESPLEGABLES DE RESPUESTAS ============ */
function funcionCambiarEstadoRespuestas(estaAbierto) {
  document.querySelectorAll(".desplegableRespuesta").forEach(function (desplegable) {
    desplegable.open = estaAbierto;
  });
}

/* ============ QUIZ ============ */
function funcionRenderizarQuiz() {
  const contenedorQuiz = document.getElementById("contenedorQuiz");
  contenedorQuiz.innerHTML = "";
  cantidadRespuestasCorrectas = 0;
  cantidadPreguntasRespondidas = 0;
  document.getElementById("resultadoQuiz").textContent = "";

  listaPreguntasQuiz.forEach(function (pregunta, indicePregunta) {
    const tarjetaPregunta = document.createElement("div");
    tarjetaPregunta.className = "tarjetaPreguntaQuiz";

    const textoPregunta = document.createElement("p");
    textoPregunta.className = "textoPreguntaQuiz";
    textoPregunta.textContent = (indicePregunta + 1) + ". " + pregunta.textoPregunta;
    tarjetaPregunta.appendChild(textoPregunta);

    const textoExplicacion = document.createElement("p");
    textoExplicacion.className = "explicacionQuiz";

    pregunta.opcionesRespuesta.forEach(function (textoOpcion, indiceOpcion) {
      const botonOpcion = document.createElement("button");
      botonOpcion.className = "botonOpcionQuiz";
      botonOpcion.textContent = textoOpcion;
      botonOpcion.addEventListener("click", function () {
        funcionResponderPregunta(tarjetaPregunta, pregunta, indiceOpcion, textoExplicacion);
      });
      tarjetaPregunta.appendChild(botonOpcion);
    });

    tarjetaPregunta.appendChild(textoExplicacion);
    contenedorQuiz.appendChild(tarjetaPregunta);
  });
}

function funcionResponderPregunta(tarjetaPregunta, pregunta, indiceElegido, textoExplicacion) {
  const listaBotonesOpcion = tarjetaPregunta.querySelectorAll(".botonOpcionQuiz");
  if (listaBotonesOpcion[0].disabled) { return; }

  listaBotonesOpcion.forEach(function (botonOpcion, indiceOpcion) {
    botonOpcion.disabled = true;
    if (indiceOpcion === pregunta.indiceRespuestaCorrecta) { botonOpcion.classList.add("opcionCorrecta"); }
  });

  if (indiceElegido === pregunta.indiceRespuestaCorrecta) {
    cantidadRespuestasCorrectas++;
  } else {
    listaBotonesOpcion[indiceElegido].classList.add("opcionIncorrecta");
  }
  textoExplicacion.textContent = pregunta.explicacion;
  cantidadPreguntasRespondidas++;

  if (cantidadPreguntasRespondidas === listaPreguntasQuiz.length) {
    document.getElementById("resultadoQuiz").textContent =
      "Resultado: " + cantidadRespuestasCorrectas + " de " + listaPreguntasQuiz.length;
  }
}

/* ============ INICIALIZACIÓN Y EVENTOS ============ */
document.querySelectorAll(".casillaTemaRepasado").forEach(function (casilla) {
  casilla.addEventListener("change", funcionActualizarProgresoEstudio);
});
document.getElementById("botonExpandirRespuestas").addEventListener("click", function () { funcionCambiarEstadoRespuestas(true); });
document.getElementById("botonContraerRespuestas").addEventListener("click", function () { funcionCambiarEstadoRespuestas(false); });
document.getElementById("botonReiniciarQuiz").addEventListener("click", funcionRenderizarQuiz);

funcionRenderizarQuiz();
