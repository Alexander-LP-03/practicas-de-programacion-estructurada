function procesarArray(arr, fn) {
    return arr.map(fn);
}

const duplicar = x => x * 4;
const cuadrado = x => x * x;
const raiz = x => Math.sqrt(x);

const datos = [4, 9, 16];

console.log("Duplicados:", procesarArray(datos, duplicar));
console.log("Cuadrados:", procesarArray(datos, cuadrado));
console.log("Raices:", procesarArray(datos, raiz));