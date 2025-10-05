let transacciones = [
    { id: 1, tipo: "deposito", monto: 1000, fecha: "2024-01-15", categoria: "salario" },
    { id: 2, tipo: "retiro", monto: 200, fecha: "2024-01-16", categoria: "compras" },
    { id: 3, tipo: "deposito", monto: 500, fecha: "2024-01-17", categoria: "freelance" }
];

function procesarTransacciones(...nuevasTransacciones) {
    nuevasTransacciones.forEach(tx => {
        if (tx.id && tx.tipo && tx.monto > 0) {
            transacciones = [...transacciones, tx];
        }
    });
}

function calcularBalance() {
    return transacciones.reduce((acc, tx) => {
        return tx.tipo === "deposito" ? acc + tx.monto : acc - tx.monto;
    }, 0);
}

function analizarGastos(periodo = "mes") {
    const gastos = transacciones.filter(tx => tx.tipo === "retiro");
    const resumen = {};

    gastos.forEach(tx => {
        resumen[tx.categoria] = (resumen[tx.categoria] || 0) + tx.monto;
    });

    return resumen;
}

function buscarTransacciones(criterios = {}) {
    const { tipo, categoria, desde, hasta } = criterios;
    return transacciones.filter(tx => {
        let cumple = true;
        if (tipo) cumple = cumple && tx.tipo === tipo;
        if (categoria) cumple = cumple && tx.categoria === categoria;
        if (desde) cumple = cumple && tx.fecha >= desde;
        if (hasta) cumple = cumple && tx.fecha <= hasta;
        return cumple;
    });
}

procesarTransacciones(
    { id: 4, tipo: "retiro", monto: 300, fecha: "2024-01-18", categoria: "ocio" },
    { id: 5, tipo: "deposito", monto: 1200, fecha: "2024-01-19", categoria: "salario" }
);

console.log("Balance actual:", calcularBalance());
console.log("Gastos por categoría:", analizarGastos());
console.log("Buscar retiros:", buscarTransacciones({ tipo: "retiro" }));
console.log("Buscar entre fechas:", buscarTransacciones({ desde: "2024-01-16", hasta: "2024-01-18" }));