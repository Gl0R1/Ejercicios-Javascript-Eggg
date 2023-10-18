// ---------- Ejercicio 2 --------------
// Conocido el número en matemática PI π, 
// pedir al usuario que ingrese la operacion del radio
// de una circunferencia y calcular y mostrar por pantalla 
// el área y perímetro. Recuerde que para calcular 
// el área y el perímetro se utilizan las siguientes fórmulas:
//     area = PI * radio2
//     perimetro = 2 * PI * radio


// **-------- 1era  forma de resolverlo --------***
var radio= prompt("ingrese el radio");

var area = Math.PI * Math.pow(radio, 2); 
var perimetro= 2 * Math.PI * radio;




// **-------- 2da forma de resolverlo --------***
function calcularArea(radio) {
    var resultado = Math.PI * Math.pow(radio, 2); 
    return resultado;
}
function calcularPerimetro(radio) {
    var resultado = 2 * Math.PI * radio;
    return resultado;
}

var area =calcularArea(radio);
var perimetro = calcularPerimetro(radio);
document.write(`el area seria: ${area.toFixed(2)}<br>
el perimetro es: ${perimetro.toFixed(2)}`);

//  **-------- 3era forma de resolverlo --------***

document.addEventListener("DOMContentLoaded", () => {
    let radio = parseFloat(prompt("Ingrese el radio de la circunferencia"));
    let area = Math.PI * Math.pow(radio,2);
    let perimetro = 2 * Math.PI * radio

    document.body.innerHTML = `<p>El área de la circunferencia es: ${area.toFixed(3)}<br>
    El perímetro de la circunferencia es: ${perimetro.toFixed(3)}</p>`;
})