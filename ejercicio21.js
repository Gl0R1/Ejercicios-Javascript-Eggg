// ---------- Ejercicio 21 -----------
// Escribir un programa para obtener un array de las 
// propiedades de un objeto Persona. Las propiedades son 
// nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. 


// const persona = {
//     nombre: "pablo",
//     edad: 20,
//     sexo: "H",
//     peso: 60, 
//     altura: 1.75,
// } 

// const vectorObjetos = [persona];

// //El for in iterara sobre los elementos dentro de un dato.
// for (var elementos in persona) {
//     vectorObjetos.push(elementos);
// }


// console.log(vectorObjetos);

function Persona(nombre, edad,sexo,peso,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso =peso;
    this.altura = altura;
    
}




function cargarPersona(){
    var nombre = prompt("ingrese su nombre");
    var edad = prompt("Ingrese su edad");
    var sexo = prompt("Ingrese el sexo Mujer , hombre u otro");
    var peso = prompt("Ingrese su peso");
    var altura = prompt("Ingrese su altura");
    return new Persona(nombre, edad,sexo, peso, altura);
}

function mostrarPersona(persona){
    var miDiv = document.getElementById("datos");
    var datosPersona = `
    <h2>Los datos ingresados son:</h2>
    <p><strong>Nombre:</strong>${persona.nombre}</p> 
    <p><strong>Edad:</strong>${persona.edad}</p>
    <p><strong>Sexo:</strong>${persona.sexo}</p>
    <p><strong>Peso:</strong>${persona.peso}</p>
    <p><strong>Altura:</strong>${persona.altura}</p>
    `;
    miDiv.innerHTML= datosPersona;
}

var persona = cargarPersona();
mostrarPersona(persona);


llenarVector(persona.nombre, persona.edad,persona.sexo,persona.peso,persona.altura);

function llenarVector(nombre, edad,sexo,peso,altura){
    // const vectorDatos = [persona.nombre, persona.edad,persona.sexo,persona.peso,persona.altura]; // Supongamos que este es tu vector de datos

    const vectorDatos = [nombre,edad,sexo,peso,altura];
    const listaDatos = document.getElementById("listaDatos");

    for (let i = 0; i < vectorDatos.length; i++) {
        const li = document.createElement("li");
        li.textContent = vectorDatos[i];
        listaDatos.appendChild(li);
    }
}


    









