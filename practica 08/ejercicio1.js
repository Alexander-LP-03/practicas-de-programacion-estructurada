function formatearSaludo(persona, horaDelDia) {
    const { nombre, edad } = persona;
    let saludo = "";

    if (edad >= 18) {
        saludo = `Buena ${horaDelDia}, señor(a) ${nombre}.`;
    } else {
        saludo = `Hola ${nombre}! Buenas ${horaDelDia}, ¿cómo estás?`;
    }

    return saludo;
}


function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

const persona1 = { nombre: "Alexander", edad: 19 };


console.log(formatearSaludo(persona1, "noches"));

console.log("Area de un circulo de radio 5:", calcularArea(5).toFixed(2));
