// --------- Ejercicio 15 ---------
// Escribe un programa JavaScript para calcular el
// área y el perímetro de un objeto Círculo con la propiedad radio.
//  Nota: Cree dos métodos para calcular el área y el perímetro. 
//  El radio del círculo lo proporcionará el usuario.


function crearCirculo(radio) {
    this.radio = radio;
    this.calcularPerimetro = calcularPerimetro;
    this.calcularArea = calcularArea;
}

function calcularArea(radio) {
    var resultado = Math.PI * Math.pow(radio, 2); 
    return resultado;
}
function calcularPerimetro(radio) {
    var resultado = 2 * Math.PI * radio;
    return resultado;
}
    
function control() {
    let radio = parseFloat(console.log("Ingrese el radio del circulo"));
    let area = calcularArea(radio);
    let perimetro = calcularPerimetro(radio);
    console.log(`
    El area del circulo es: ${area} 
    El perimetro es: ${perimetro}`)
}

control(radio);




