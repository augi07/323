// Aufgabe 6a
let randomNum = Math.random();

if (randomNum > 0.5) {
    console.log("Größer als 0.5");
} else if (randomNum > 0.25) {
    console.log("Größer als 0.25");
} else {
    console.log("Kleiner oder gleich 0.25");
}

// Aufgabe 6b
let randomInt = Math.floor(Math.random() * 5);

switch(randomInt) {
    case 1:
        console.log("Der Wert der Zahl ist exakt 1");
        break;
    case 3:
        console.log("Der Wert der Zahl ist exakt 3");
        break;
    default:
        console.log("Der Wert der Zahl ist weder 1 noch 3");
}
