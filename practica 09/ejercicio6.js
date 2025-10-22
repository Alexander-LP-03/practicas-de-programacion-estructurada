function crearPerfil(
    nombre,
    edad = 18,
    ciudad = "No especificada",
    profesion = "Estudiante"
) {
    return { nombre, edad, ciudad, profesion };
}

// Ejemplos de uso:
console.log(crearPerfil("Alexander"));
console.log(crearPerfil("Paola", 23));
console.log(crearPerfil("Carlos", 26, "Guatemala"));
console.log(crearPerfil("Marta", 22, "Honduras", "programadora"));