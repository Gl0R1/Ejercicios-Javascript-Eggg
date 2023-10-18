// ---------- Ejercicio 13 -------------
// Crear un objeto persona, con las propiedades 
// nombre, edad, sexo ('H' hombre, 'M' mujer,'O' otro), 
// peso y altura. 
// A continuación, muestre las propiedades del objeto JavaScript.

/* dentro de un objetos, a las variales se las van a llamar atributos/propiedas y  a las
funciones se les llama métodos */

const persona = {
nombre: "pablo",
edad: 20,
sexo: "H",
peso: 60, 
altura: 1.75,

//creando un metodo para saludar
// saludar:function(){
//     console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años`)
// }
}

//console.log(persona.edad) // accedo a un atributo
//console.log(persona["nombre"]);
console.log(`
nombre: ${persona.nombre} 
edad: ${persona.edad}
sexo: ${persona.sexo}
peso: ${persona.peso}
altura: ${persona.altura}
`)
//persona.saludar(); // llamar al metodo
var datos = `
<p>nombre: ${persona.nombre} </p>
<p><strong>edad:</strong> ${persona.edad}</p>
<p>sexo: ${persona.sexo}</p>
<p>peso: ${persona.peso}</p>
<p>altura: ${persona.altura}</p>
`

var miDiv = document.getElementById("datos");
miDiv.innerHTML = datos;


