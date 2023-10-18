// --------- Ejercicio 23 -------------
// Resalte todas las palabras de más de 8 caracteres 
// en el texto del párrafo (con un fondo amarillo, por ejemplo:)


var texto = "Hol@ cómo estás? Esperamos que a la recepción de este correo estés muy bien! Nos comunicamos desde Egg, ya que queremos saber si tienes alguna inquietud y/o dificultad para conectarte ya que hemos notado que diste presente sin unirte al encuentro en zoom o bien, estabas conectado a zoom pero sin actividad y sin respuesta al coach que visito tu equipo el día de hoy. Recuerda que tanto tu asistencia como participación en tu equipo de trabajo son requisitos fundamentales para alcanzar tu diploma. Además, para potenciar la cooperación y enriquecer la experiencia de tus compañeros"

// var vector = texto.split(" ");

// for (var i  = 0; i < vector.length; i++) {
//     var palabras = vector[i];
//     if (palabras.length > 8){
//     vector[i] = '<span style="background-color: yellow;">' + vector[i] + '</span>';
//     }

// }



function resaltar() {
    var parrafo = document.getElementById("parrafo");
    var contenido = parrafo.innerHTML;
    var palabras = contenido.split(" ");
  
    for (var i = 0; i < palabras.length; i++) {
      if (palabras[i].length > 8) {
        palabras[i] = '<span style="background-color: yellow;">' + palabras[i] + '</span>';
      }
    }
  
    parrafo.innerHTML = palabras.join(" ");
    //con el join le indico que junte los valores del vector
}
  






