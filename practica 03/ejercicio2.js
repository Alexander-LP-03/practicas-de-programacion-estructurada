const registro = {
    materias: [
        { nombre: "logica de programacio", nota: 10 },
        { nombre: "psicologia", nota: 9.5 },
        { nombre: "Ingles", nota: 8.9 }
    ],

    calcularPromedio() {
        const suma = this.materias.reduce((acc, m) => acc + m.nota, 0);
        return suma / this.materias.length;
    },

    estadoAcademico() {
        const promedio = this.calcularPromedio();
        return promedio >= 6 ? "Aprobado" : "Reprobado";
    }
};

console.log("Promedio:", registro.calcularPromedio());
console.log("Estado:", registro.estadoAcademico());