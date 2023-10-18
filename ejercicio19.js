// -------- Ejercicio 19 ---------
// Realizar un programa en Java donde se creen dos arreglos: 
// el primero será un arreglo A de 50 números reales, 
// el segundo B, un arreglo de 20 números, también reales. 
// El programa deberá inicializar el arreglo A con números
//  aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los
// primeros 10 números ordenados al arreglo B de 20 elementos, 
// y rellenar los 10 últimos elementos con el valor 0.5. 
// Mostrar los dos arreglos resultantes: 
//  el ordenado de 50 elementos y el combinado de 20. 

function getRandomInt(min,max) {
    return Math.floor(Math.random()*(max-min + 1)) + min;
}

// const longitudA = 50;
// const longitudB = 20;
// const vectorA = [];


function llenarVectorA(){
    const longitudA = 50;
    const longitudB = 20;
    const vectorA = [];
    //const vectorB = [];
    for(var i = 0; i < longitudA; i++) {
        vectorA.push(getRandomInt(1,50));
    }

    console.log(`Los elementos del vector A son: [${vectorA}]`);
    //ordenar el vector de menor a mayor/Al restar b de a, estamos asegurando que los numeros se ordenen en orden ascendente.
    vectorA.sort((a, b) => a - b);
    console.log(`Los elementos del vector ordenados de menor a mayor son: [${vectorA}]`);
    //pasar los 10 primeros elementos
    const vectorB = vectorA.slice(0, 10);
    console.log(`Los 10 primeros elementos del vector A, pasados al vector B son: [${vectorB}]`);
    //relleno los 10 ultimos elementos del vector B con 0.5
    for (let i = 0; i < longitudB; i++){
        vectorB.push(0.5);
    }
    console.log(`Los elementos actuales del vector A son: ${vectorA}`);
    console.log(`Los elementos del vector B son: ${vectorB}`);

    return vectorA;
}

function rellenoVEctorB(x) {

}

llenarVectorA();






// function ordenar(vectorA){
//     //for (let i = 0; i < longitudA, i++){
//         vectorA.sort((a, b) => a-b);
//    // }
//     return vectorA;
// }

// ordenar(vectorA);
