// ------- Ejercicio 4 ---------
//  Realiza un programa que sólo permita introducir 
//  los caracteres ‘S’ y ‘N’. 
//  Si el usuario ingresa alguno de esos dos caracteres 
//  se deberá de imprimir un mensaje por pantalla que diga 
//  “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.



var letra = prompt("ingrese una letra, s/n")
if (letra =="s" || letra == "n") {
    alert("CORRECTO");
}else {
    alert("INCORRECTO");
}