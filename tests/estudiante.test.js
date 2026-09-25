const {
    Estudiante,
    validarDatos,
    agregarEstudiante
} = require("../js/estudiante.js");


// PRUEBAS DE LA CLASE ESTUDIANTE

describe("Clase Estudiante", () => {

    test("Debe crear un estudiante correctamente", () => {

        const estudiante =
            new Estudiante(1, "Ana", 22);


        expect(estudiante.id).toBe(1);

        expect(estudiante.nombre).toBe("Ana");

        expect(estudiante.edad).toBe(22);

    });

});


// PRUEBAS DE VALIDACIÓN

describe("Función validarDatos", () => {

    test("Debe rechazar un nombre vacío", () => {

        const resultado =
            validarDatos("", "22");


        expect(resultado.valido).toBe(false);

        expect(resultado.mensaje)
            .toBe("Todos los campos son obligatorios.");

    });


    test("Debe rechazar una edad vacía", () => {

        const resultado =
            validarDatos("Ana", "");


        expect(resultado.valido).toBe(false);

    });


    test("Debe rechazar una edad que no sea numérica", () => {

        const resultado =
            validarDatos("Ana", "veintidos");


        expect(resultado.valido).toBe(false);

        expect(resultado.mensaje)
            .toBe("La edad debe ser numérica.");

    });


    test("Debe aceptar datos correctos", () => {

        const resultado =
            validarDatos("Ana", "22");


        expect(resultado.valido).toBe(true);

        expect(resultado.nombre).toBe("Ana");

        expect(resultado.edad).toBe(22);

    });

});

// PRUEBAS PARA AGREGAR ESTUDIANTES

describe("Función agregarEstudiante", () => {

    test("Debe agregar un estudiante al arreglo", () => {

        const estudiantes = [];


        const resultado =
            agregarEstudiante(
                estudiantes,
                "Ana",
                "22"
            );


        expect(resultado.exito).toBe(true);

        expect(estudiantes.length).toBe(1);

        expect(estudiantes[0].nombre).toBe("Ana");

        expect(estudiantes[0].edad).toBe(22);

    });


    test("Debe asignar un ID al estudiante", () => {

        const estudiantes = [];


        agregarEstudiante(
            estudiantes,
            "Ana",
            "22"
        );


        agregarEstudiante(
            estudiantes,
            "Carlos",
            "19"
        );


        expect(estudiantes[0].id).toBe(1);

        expect(estudiantes[1].id).toBe(2);

    });


    test("No debe agregar un estudiante con datos incorrectos", () => {

        const estudiantes = [];


        const resultado =
            agregarEstudiante(
                estudiantes,
                "",
                "22"
            );


        expect(resultado.exito).toBe(false);

        expect(estudiantes.length).toBe(0);

    });

});