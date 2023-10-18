
//construcctor persona
function Persona(nombre, edad,sexo,peso,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso =peso;
    this.altura = altura;
    
}
// traigo datos del HTML
function recogerDatos(){
   let nombre = document.getElementById('nombre').value;
   let edad = document.getElementById('edad').value;
   let sexo = document.getElementById('sexo').value;
   let peso = document.getElementById('peso').value;
   let altura = document.getElementById('altura').value;

   // creo un objeto Persona
   var persona = new Persona(nombre, edad,sexo,peso,altura);

   // muestro en HTML
   
    mostrarPersona(persona);
   
}


function mostrarPersona(persona){
    var miDiv = document.getElementById("datos");
    var datosPersona = `
    <h2>Los datos ingresados son:</h2>
    <p><strong>Nombre:</strong>${persona.nombre}</p> 
    <p><strong>Edad:</strong>${persona.edad}</p>
    <p><strong>Sexo:</strong>${persona.sexo}</p>
    <p><strong>Peso:</strong>${persona.peso} kg</p>
    <p><strong>Altura:</strong>${persona.altura} cm</p>
    `;
    miDiv.innerHTML= datosPersona;
}



