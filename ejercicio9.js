// -----------Ejercicio 9 ----------
// Realizar un programa que pida una frase 
// y el programa deberá mostrar la frase con un espacio 
// entre cada letra. La frase se mostrara así: 
// H o l a. 
//  Nota: recordar el funcionamiento de la función Substring(). 

var frase = prompt("Ingrese una frase");

var resultado = " ";
function separarLetras(frase) {
    for (var i = 0; i < frase.length; i++) {
        resultado += frase.substring(i, i + 1) + " ";
    }  
   // alert(resultado); 
    //otra opcion de mostrar el jerecicio
    console.log(resultado);
    document.getElementById("texto").innerHTML = `La frase separada queda asi:<br>
    ${resultado}`;
}

separarLetras(frase);