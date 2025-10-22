function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
 
function sumarDigitos(num) {
    if (num < 10) return num;
    return (num % 10) + sumarDigitos(Math.floor(num / 10));
}

console.log("Factorial de 5:", factorial(5));
console.log("Fibonacci(6):", fibonacci(6));
console.log("Suma de digitos de 1234:", sumarDigitos(1234));