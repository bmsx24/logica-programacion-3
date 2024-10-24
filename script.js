const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");

function operar() {
    const n = parseInt(numero.value); // Leer el valor dentro de la función
    if (isNaN(n) || n < 0) {
        resultado.textContent = "Error: La entrada debe ser un número entero no negativo.";
    } else {
        function factorial(n) {
            return (n > 1) ? n * factorial(n - 1) : 1; // Cambiar la condición a n > 1
        }
        resultado.textContent = 'El factorial de ' + n + ' es: ' + factorial(n);
    }
}

