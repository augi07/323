// Aufgabe 8a
function multiply(a, b) {
    console.log(a * b);
}

multiply(2, 3);  // Ausgabe: 6
multiply(5, 4);  // Ausgabe: 20

// Aufgabe 8b
function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    console.log(fahrenheit);
}

celsiusToFahrenheit(0);   // Ausgabe: 32
celsiusToFahrenheit(25);  // Ausgabe: 77

// Aufgabe 8c
const modulo = (a, b) => a % b;

console.log(modulo(10, 3));  // Ausgabe: 1
console.log(modulo(20, 4));  // Ausgabe: 0
