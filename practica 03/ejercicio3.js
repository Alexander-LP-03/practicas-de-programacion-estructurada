const tareas = {
    lista: [
        { titulo: "Estudiar matematica", descripcion: "Repasar derivadas", completada: false },
        { titulo: "Jugar", descripcion: "jugar 180 min", completada: true },
        { titulo: "limpiar", descripcion: "limpiar y ordenar el cuarto", completada: true }
    ],

    marcarCompletada(titulo) {
        const tarea = this.lista.find(t => t.titulo === titulo);
        if (tarea) tarea.completada = true;
    },

    pendientes() {
        return this.lista.filter(t => !t.completada);
    }
};

tareas.marcarCompletada("jugar");
tareas.marcarCompletada("limpiar");
console.log("Pendientes:", tareas.pendientes());