// ------------Ejercicio 12 ----------
// Escribir una función flecha de JavaScript que 
// reciba un argumento y retorne el tipo de dato.


var palabra = prompt("INGRESE UN NUMERO O UNA PALABRA");

//let frase (palabra) => 


function tipoDeDato(palabra) {
    var numero = parseInt(palabra);

    if (!isNaN(numero)) {
        console.log("usted ingreso un numero")
    }else {
        console.log("usted ingreso un texto")
    }
    // console.log(tipoDeDato(5)); // number
    // console.log(tipoDeDato('hola')); // string
    // console.log(tipoDeDato(true)); // boolean
}

tipoDeDato(palabra);

