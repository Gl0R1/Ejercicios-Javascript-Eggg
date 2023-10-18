// function holaMundo(){
//     console.log("Hola mundo");
// }

// holaMundo();

// function escribirBienvenida(nombre){
//     alert("Bienvenida " + nombre)

// }


// escribirBienvenida("Agustin");
    // O podemos hacerlo con una variable
// let nombre = "Agustin";
// escribirBienvenida("gloria");

// function media(operacion1,operacion2){
//     let resultado;
//     resultado = (operacion1 + operacion2) / 2;
//     return resultado;
// }

// var gloria = media(20,50)
// console.log(gloria);

// let sum = (a, b) => a + b;
// /* Esta función de flecha es una forma más corta de:
// let sum = function(a, b) {
// return a + b;
// };
// */
// console.log(sum(10, 20)); // 3


// Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
// hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
// indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.


// var dia = prompt("Como esta el dia de hoy?\n(soleado, nublado, lloviendo)");
//alert(`el dia esta ${dia}`);
//document.write(`el dia esta ${dia}`)
//document.getElementById("texto").innerHTML=`el dia esta ${dia}`;

// Conocido el número en matemática PI π, pedir al usuario que ingrese el operacion del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

// var radio= prompt("ingrese el radio");

// var area = Math.PI * Math.pow(radio, 2); 
// var perimetro= 2 * Math.PI * radio;




// 2do forma de resolverlo
// function calcularArea(radio) {
//     var resultado = Math.PI * Math.pow(radio, 2); 
//     return resultado;
// }
// function calcularPerimetro(radio) {
//     var resultado = 2 * Math.PI * radio;
//     return resultado;
// }

// var area =calcularArea(radio);
// var perimetro = calcularPerimetro(radio);
// document.write(`el area seria: ${area.toFixed(2)}<br>
// el perimetro es: ${perimetro.toFixed(2)}`);

//3er

// document.addEventListener("DOMContentLoaded", () => {
//     let radio = parseFloat(prompt("Ingrese el radio de la circunferencia"));
//     let area = Math.PI * Math.pow(radio,2);
//     let perimetro = 2 * Math.PI * radio

//     document.body.innerHTML = `<p>El área de la circunferencia es: ${area.toFixed(3)}<br>
//     El perímetro de la circunferencia es: ${perimetro.toFixed(3)}</p>`;
// })

//ejercicio 3.
// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// edad se debe mostrar un mensaje indicándolo.

// var edad = prompt("ingrese su edad");
// if (edad>17){
//     alert("Eres mayor de edad");
// }
// else {
//     alert("Eres menor de edad")
// }

// Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
// ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
// que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.



// var letra = prompt("ingrese una letra, s/n")
// if (letra =="s" || letra == "n") {
//     alert("CORRECTO");
// }else {
//     alert("INCORRECTO");
// }


// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos operaciones
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.





// function suma(a, b) {
//     return a + b;  
// }
// function resta(a, b){
//     return a - b;
// }
// function multiplicación(a, b){
//     return a * b;
// }
// function division(a, b) {
//     if (b != 0) {
//         return a / b;
//     } else {
//         return "No se puede dividir por cero";
//     }
// }




// function operacion(){
//     var a = parseInt(prompt("Ingrese el primer valor para realizar la operación"));
//     var b = parseInt(prompt("Ingrese el segundo valor para realizar la operación"));

    
//     var opcion = prompt("Ingrese la letra de la operación que desea realizar:/n suma,resta,multiplicación, división");
    
//     var resultado;

//     switch (opcion) {
//         case "S":
//         case "s":
//             resultado = suma(a,b);
//             alert("la suma de los valores es: " + resultado);
//         break;
//         case "r":
//             resultado = resta(a,b);
//             alert("la resta de los valores es: " + resultado);
//         break;
//         case "m":
//             resultado = multiplicacion(a,b
//             alert("la multiplicación de los valores es: " + resultado);
//         break;
//         case "d":

//             alert("la division de los valores es: " + resultado);
//         break;
//         default:
//         console.log("ingrese una opcion valida");
//     }
// }
// operacion();
        

// var num1= parseFloat(prompt("ingrese el primer numero"));
// var num2= parseFloat(prompt("ingrese el segundo numero"));

// var bandera = true;

// while (bandera) {
//      opcion = prompt(`
//      Seleccione la operacion que desee realizar:
//      S = suma
//      R = resta
//      M = multiplicacón
//      D = división
//      E = salir
//      `).toUpperCase();



//     switch(opcion){
//         case "S":
//             //alert(`la suma de los 2 numeros es: ${num1 + num2}`);
//             sumar(num1,num2);
//         break;
//         case "R":
//             alert(`la resta de los 2 numeros es: ${num1 - num2}`);
//         break;
//         case "M":
//             alert(`la multiplicacion de los 2 numeros es: ${num1 * num2}`);
//         break;
//         case "D":
//             if ( num2 != 0){
//                 alert(`la división de los 2 numeros es: ${num1 / num2}`);
//             }else{
//                 alert("no se puede dividir por 0");
//             }
            
//         break;
//         case "E":
//             bandera = false
//         break;
//         default:
//             alert("ingrese una opcion correcta");
//         break;
// }
// }
// function sumar(num1,num2){
//     alert(`la suma de los 2 numeros es: ${num1 + num2}`); 
// }


// Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
// En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. 


var num = parseInt(prompt("ingrese un numero"));

if (num == 0){
    alert("el numeros no es par ni impar");
}else if (num % 2 == 0){
    alert("el numero es par");
}else{
    alert("el numero es impar");
}







