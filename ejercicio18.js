// ------- Ejercicio 18 -----------
// A partir del siguiente array: 
// var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor

// b) Utilizando exclusivamente los dos valores booleanos del array,
// determinar los operadores necesarios para obtener un 
// resultado true y otro resultado false.

// c) Determinar el resultado de las cinco operaciones matemáticas
// realizadas con los dos elementos numéricos.


var valores = [true, 5, false, "hola", "adios", 2];
// a)

if ("hola" > "adios") {
    console.log("El elemento 'hola' es mayor.");
} else if ("hola" < "adios") {
    console.log("El elemento 'adios' es mayor.");
} else {
    console.log("Los elementos son iguales.");
}

// b)

// Operación que da true: true OR false
var resultadoTrue = valores[0] || valores[2];

// Operación que da false: true AND false
var resultadoFalse = valores[0] && valores[2];

console.log("Resultado true:", resultadoTrue);
console.log("Resultado false:", resultadoFalse);


// c)


var numero1 = valores[1]; // 5
var numero2 = valores[5]; // 2

var suma = numero1 + numero2; // 7
var resta = numero1 - numero2; // 3
var multiplicacion = numero1 * numero2; // 10
var division = numero1 / numero2; // 2.5



console.log(`
suma: ${suma}
resta: ${resta}
multiplicación: ${multiplicacion}
division: ${division}
`);











