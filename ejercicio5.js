// ------- Ejercicio 5 ---------
// Construir un programa que simule un menú de opciones 
// para realizar las cuatro operaciones aritméticas básicas 
// (suma, resta, multiplicación y división) 
// con dos valores numéricos enteros. 
// El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: 
// ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. 


var num1= parseFloat(prompt("ingrese el primer numero"));
var num2= parseFloat(prompt("ingrese el segundo numero"));

var bandera = true;

while (bandera) {
     opcion = prompt(`
     Seleccione la operacion que desee realizar:
     S = suma
     R = resta
     M = multiplicacón
     D = división
     E = salir
     `).toUpperCase();



    switch(opcion){
        case "S":
            //alert(`la suma de los 2 numeros es: ${num1 + num2}`);
            sumar(num1,num2);
        break;
        case "R":
            alert(`la resta de los 2 numeros es: ${num1 - num2}`);
        break;
        case "M":
            alert(`la multiplicacion de los 2 numeros es: ${num1 * num2}`);
        break;
        case "D":
            if ( num2 != 0){
                alert(`la división de los 2 numeros es: ${num1 / num2}`);
            }else{
                alert("no se puede dividir por 0");
            }
            
        break;
        case "E":
            bandera = false
        break;
        default:
            alert("ingrese una opcion correcta");
        break;
}
}
function sumar(num1,num2){
    alert(`la suma de los 2 numeros es: ${num1 + num2}`); 
}