// --------- Ejercicio 22 -------------
// Escribir un programa de JavaScript que al clickear un botón
// muestre un mensaje a elección.

// document.body.innerHTML con el innerHTML le creas el boton
document.body.innerHTML='<button>Prohibido Tocar</button>';

//selecciono el boton y le pongo atento al evento click 
document.querySelector('button').addEventListener('click',() => {document.body.innerHTML="<h1>Te dije que no tocaras </h1>"});





