// para dar el numero aleatorio
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// codigo del juego
const numeroSecreto = generarNumeroAleatorio(1, 100);
let intentos = 0;
let adivinado = false;

console.log("Bienvenido al Juego de Adivinanza");
console.log("Adivina el número secreto entre 1 y 100.");

while (!adivinado) {
    const conjetura = parseInt(prompt("Introduce tu conjetura:"));
    intentos++;

    if (conjetura === numeroSecreto) {
        adivinado = true;
        console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    } else if (conjetura < numeroSecreto) {
        console.log("Demasiado bajo. ¡Inténtalo nuevamente!");
    } else {
        console.log("Demasiado alto. ¡Inténtalo nuevamente!");
    }
}