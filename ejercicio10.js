// -------- Ejercicio 10 ----------
//   Escribir una función flecha que reciba una palabra 
//   y la devuelva al revés
// let sum = (a, b) => a + b;

var frase = prompt("Ingrese una palabra");

const invertida = (frase) => frase.split("").reverse().join("");

invertida(frase);
console.log(invertida(frase));

document.getElementById("texto").innerHTML = `Ingresaste: ${frase}  y de manera invertida es asi  ${fraseInvertida}`;




// ejercicio juanjo 
// let invertir = (frase) => frase.split("").reverse().join("");
// let fraseInvertida = invertir(prompt("Ingrese una palabrafrase"));
// document.getElementById("texto").innerHTML = `de manera invertida es <strong> ${fraseInvertida}</strong>`;

