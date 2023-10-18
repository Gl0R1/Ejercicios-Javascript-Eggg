// -------- Ejercicio 11  -------------
//   Escribir una función que reciba un String 
//   y devuelva la palabra más larga.
//   String Ejemplo: “Guia de JavaScript”
//   Resultado esperado : “JavaScript”


var frase =prompt("Ingrese una frase")


function palabraLarga(frase){
var vectorPalabras = frase.split(" ");//separa en palabras
var palabra = "";

for(var i = 1; i < vectorPalabras.length; i++){
    if(vectorPalabras[i].length > palabra.length){
       palabra = vectorPalabras[i];
    }
}
console.log(palabra);
}

palabraLarga(frase);





