// --------- Ejercicio 20 -----------
// Realizar un programa que obtenga la siguiente matriz 
//      [[3], [6], [9], [12], [15]] 
// y devuelve y muestre el siguiente array 
//          [6, 9, 12, 15, 18]. 

// Matriz dada
var matriz = [[3], [6], [9], [12], [15]];

// function mostrarVector(array) {
//     document.getElementById("mat").innerHTML += "<p>" + array + "</p>";
// }


// function rellenar(matriz){
//     let vec = [];
//     for(let i=0; i<matriz.length;i++){
//     vec.push(matriz[i][0]+3);
//     }
//     return vec;
// }

// var aux = rellenar(matriz);
// mostrarVector(aux);


// Map para obtener el nuevo array sumando 3 a cada elemento
const nuevoArray = matriz.map(elemento => elemento[0] + 3);

// Mostrar el nuevo array en la consola
console.log(nuevoArray);
