// --------- Ejercicio 16
// Realizar un programa que rellene dos vectores al mismo tiempo,
//  con 5 valores aleatorios y los muestre por pantalla. 


// creo una funcion para generar numero aleatorios
function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min + 1)) + min;
}

//Manera facil de resolver el ejercicio
const longitud = 5;
const array = [];
const array2 = [];

for (var i = 0; i < longitud; i++) {
    array.push(getRandomInt(1,50));
    array2.push(getRandomInt(1,50));
}
console.log(`
    Vector 1 [${array}]
    Vector 2 [${array2}]
`)


// Ejercico realizados con funciones.....
// function llenarVectores(){

//     const longitud = 5;
//     const array = [];
//     const array2 = [];

//     for (let i = 0; i < longitud; i++) {
//         array.push(getRandomInt(1,50));
//         array2.push(getRandomInt(1,50));
//     }
//     return [array, array2];
// }

// function mostrarVectorConsola(vectores){
//     const [array, array2] = vectores;
//     console.log(`
//     Vector 1 [${array}]
//     Vector 2 [${array2}]
//     `)
// }
// function mostrarVectorHtml(vectores){
//     const [array, array2] = vectores;
//     let mostrar = `
//     <p><strong>Vector 1 =    </strong>[${array}] </p>
//     <p><strong>Vector 2 =    </strong>[${array2}]</p>
//     `
//     let = miDiv = document.getElementById("datos");
//     miDiv.innerHTML= mostrar;
// }

// // lleno y muestro los vectores
// var vectoresGenerados = llenarVectores();
// mostrarVectorConsola(vectoresGenerados);
// mostrarVectorHtml(vectoresGenerados);
