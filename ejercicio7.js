// ---------Ejercicio 7 -------------
// Escriba un programa en el cual se ingrese un valor 
// límite positivo, y a continuación solicite 
// números al usuario hasta que la suma de los números 
// introducidos supere el límite inicial




// const es una palabra clave que se utiliza para declarar una variable con un valor constante o inmutable.una vez que asignas un valor a una variable declarada con const, no puedes cambiar ese valor posteriormente.

const valorLimite = parseInt(prompt("Ingresa el límite positivo:"));
let suma = 0;
let num;

while (suma <= valorLimite) {
    num = parseInt(prompt("Ingresa un número:"));
    //La función isNaN() en JavaScript se utiliza para verificar 
    //si un valor no es un número, devuelve true si no es numerico y false si es numerico.

    
    if (!isNaN(num)) {
        suma += num;
    }else {
        alert("ingrese un número valido");
    }
}
    
alert("La suma de los números ingresados superó el límite inicial.");

