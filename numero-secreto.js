
// la funcion del juego
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}
// posibles llamados
console.log("¡Bienvenido a Adivina el Número Secreto!");
console.log("La computadora ha elegido un número secreto entre 1 y 10.");
console.log("Debes adivinar cuál es. ¡Buena suerte!");

//codigo de numero secreto
const numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let adivinado = false;

while (!adivinado) {
    const conjetura = parseInt(prompt("Introduce tu conjetura (entre 1 y 10):"));
    intentos++;

    if (conjetura === numeroSecreto) {
        adivinado = true;
        console.log(`¡Correcto! Adivinaste el número secreto en ${intentos} intentos.`);
    } else if (conjetura < numeroSecreto) {
        console.log("Demasiado bajo. ¡Inténtalo nuevamente!");
    } else {
        console.log("Demasiado alto. ¡Inténtalo nuevamente!");
    }
}