// Arreglo donde almacenaremos los estudiantes
const estudiantes = [];


// Obtenemos los elementos del HTML
const formulario = document.getElementById("formEstudiante");

const inputNombre = document.getElementById("nombre");

const inputEdad = document.getElementById("edad");

const listaEstudiantes = document.getElementById("listaEstudiantes");

const mensaje = document.getElementById("mensaje");


// Escuchamos el evento submit del formulario
formulario.addEventListener("submit", function (evento) {

    // Evitamos que la página se recargue
    evento.preventDefault();


    // Obtenemos los valores
    const nombre = inputNombre.value;

    const edad = inputEdad.value;


    // Intentamos agregar al estudiante
    const resultado = agregarEstudiante(
        estudiantes,
        nombre,
        edad
    );


    // Si hubo un error
    if (!resultado.exito) {

        mostrarMensaje(
            resultado.mensaje,
            "danger"
        );

        return;
    }


    // Si todo salió correctamente
    mostrarMensaje(
        "Estudiante agregado correctamente.",
        "success"
    );


    // Mostramos nuevamente todos los estudiantes
    mostrarEstudiantes();


    // Limpiamos el formulario
    formulario.reset();


    // Regresamos el cursor al nombre
    inputNombre.focus();

});


// Función para mostrar todos los estudiantes
function mostrarEstudiantes() {

    // Primero limpiamos el contenedor
    listaEstudiantes.innerHTML = "";


    // Recorremos el arreglo
    estudiantes.forEach(function (estudiante) {

        // Creamos la columna
        const columna = document.createElement("div");

        columna.className = "col-md-6 col-lg-4";


        // Creamos la tarjeta
        const tarjeta = document.createElement("div");

        tarjeta.className =
            "card estudiante-card h-100 shadow-sm";


        // Cuerpo de la tarjeta
        const cuerpo = document.createElement("div");

        cuerpo.className = "card-body";


        // Nombre
        const nombre = document.createElement("h3");

        nombre.className = "h5 card-title";

        nombre.textContent = estudiante.nombre;


        // Edad
        const edad = document.createElement("p");

        edad.className = "card-text";

        edad.textContent =
            `${estudiante.edad} años`;


        // ID
        const id = document.createElement("small");

        id.className = "text-muted";

        id.textContent =
            `ID: ${estudiante.id}`;


        // Agregamos los elementos
        cuerpo.appendChild(nombre);

        cuerpo.appendChild(edad);

        cuerpo.appendChild(id);


        tarjeta.appendChild(cuerpo);

        columna.appendChild(tarjeta);

        listaEstudiantes.appendChild(columna);

    });

}


// Función para mostrar mensajes
function mostrarMensaje(texto, tipo) {

    mensaje.innerHTML = "";

    const alerta = document.createElement("div");

    alerta.className =
        `alert alert-${tipo}`;

    alerta.textContent = texto;

    mensaje.appendChild(alerta);

}