// ----------Ejercicio 8 -------------
// Escribir un programa que lea números enteros hasta teclear 0(cero). 
// Al finalizar el programa se debe mostrar el máximo número
// ingresado, el mínimo, y el promedio de todos ellos. 

var bandera = true;
var vector = [];
var suma = 0;

while(bandera){
    var num = parseInt(prompt("Ingrese un número entero (0 para finalizar:"));

    if (num === 0) {
        bandera = false;
       
    }else if (!isNaN(num)){
        vector.push(num);
        suma += num;
    }else {
        alert("ingrese un numero valido");
    }
}

const maximo = Math.max(...vector);
const minimo = Math.min(...vector);
const suma = vector.reduce((total, valor) => total + valor, 0);
const promedio = suma / vector.length;

alert(`
El maximo numero ingresado es: ${maximo}
El minimo numero ingresado es: ${minimo}
El Promedio de los numeros ingresado es: ${promedio}
`);







