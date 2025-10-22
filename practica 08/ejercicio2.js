function calcularCubo(num) {
    return Math.pow(num, 3);
}

const calcularCuboExpr = function (num) {
    return num ** 3;
};

function transformarArray(arr, transformacion) {
    return arr.map(transformacion);
}

const numeros = [1, 2, 3, 4];

console.log("Cubo (declaración):", calcularCubo(3));
console.log("Cubo (expresión):", calcularCuboExpr(3));
