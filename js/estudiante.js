// Clase Estudiante
class Estudiante {

    constructor(id, nombre, edad) {
        this.id = id;
        this.nombre = nombre;
        this.edad = Number(edad);
    }

}


// Función para validar los datos
function validarDatos(nombre, edad) {

    // Eliminamos espacios al inicio y final
    const nombreLimpio = String(nombre).trim();
    const edadLimpia = String(edad).trim();


    // Validamos que ningún campo esté vacío
    if (nombreLimpio === "" || edadLimpia === "") {

        return {
            valido: false,
            mensaje: "Todos los campos son obligatorios."
        };

    }


    // Convertimos la edad a número
    const edadNumero = Number(edadLimpia);


    // Validamos que realmente sea un número
    if (Number.isNaN(edadNumero)) {

        return {
            valido: false,
            mensaje: "La edad debe ser numérica."
        };

    }


    // Si todo está correcto
    return {
        valido: true,
        nombre: nombreLimpio,
        edad: edadNumero
    };

}


// Función para agregar un estudiante
function agregarEstudiante(estudiantes, nombre, edad) {

    const validacion = validarDatos(nombre, edad);


    // Si los datos no son válidos
    if (!validacion.valido) {

        return {
            exito: false,
            mensaje: validacion.mensaje
        };

    }


    // Creamos un ID utilizando el tamaño del arreglo
    const id = estudiantes.length + 1;


    // Creamos un objeto de la clase Estudiante
    const estudiante = new Estudiante(
        id,
        validacion.nombre,
        validacion.edad
    );


    // Agregamos el estudiante al arreglo
    estudiantes.push(estudiante);


    return {
        exito: true,
        estudiante: estudiante
    };

}


// Esto permite utilizar las funciones con Jest.
// En el navegador este bloque simplemente se ignora.
if (typeof module !== "undefined" && module.exports) {

    module.exports = {
        Estudiante,
        validarDatos,
        agregarEstudiante
    };

}