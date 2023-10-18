// ---------- Ejercicio 17 -------------
// Realizar un programa que elimine los dos últimos elementos 
// de un array. Mostrar el resultado




function eliminarDosUltimosElementos(array) {
    if (array.length >= 2) {
      array.splice(-2);//elimina posiciones de un array
    } else {
      console.log("El array debe tener al menos dos elementos.");
    }
}
  
const vector = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];  
console.log("Array original:", vector);
  
eliminarDosUltimosElementos(vector);
console.log("Array después de eliminar los dos últimos elementos:", vector);
  






