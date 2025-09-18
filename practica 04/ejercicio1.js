const empleados = {
    lista: [],

    registrar(nombre, edad, departamento, salario) {
        this.lista.push({ nombre, edad, departamento, salario });
    },

    mostrarTodos() {
        console.log("Lista de empleados:");
        this.lista.forEach(emp => {
            console.log(`${emp.nombre}, ${emp.edad} años, ${emp.departamento}, $${emp.salario}`);
        });
    },

    buscarPorNombre(nombre) {
        return this.lista.find(emp => emp.nombre === nombre) || "Empleado no encontrado";
    },

    salarioPromedio() {
        if (this.lista.length === 0) return 0;
        const total = this.lista.reduce((acc, emp) => acc + emp.salario, 0);
        return total / this.lista.length;
    }
};

// Ejemplo de uso
empleados.registrar("Mabel", 30, "Recursos Humanos", 6000);
empleados.registrar("Mario", 40, "IT", 9000);
empleados.registrar("Jose", 23, "Marketing", 6500);

empleados.mostrarTodos();
console.log("Buscar 'Mario':", empleados.buscarPorNombre("Mario"));
console.log("Salario promedio:", empleados.salarioPromedio());
