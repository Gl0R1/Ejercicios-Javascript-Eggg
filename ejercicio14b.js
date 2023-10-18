// -------- Ejercicio 14 -----------
// Crear un objeto libro que contenga las siguientes propiedades:
// ISBN, Título, Autor, Número de páginas. 
// Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN,
// el título, el autor del libro y el numero de páginas.


// constructor
function Libro(ISBN,titulo,autor,numPaginas){
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
}

function cargarLibro(){
    let ISBN = prompt("Introduce el ISBN del libro:");
    let titulo = prompt("Ingrese el titulo del libro");
    let autor = prompt("Ingrese el nombre del autor:");
    let numPaginas = prompt("Introduce el número de páginas del libro:");
    return new Libro(ISBN,titulo,autor,numPaginas);
}

function mostrarLibroConsola(libro){
    console.log(`
    ISBN: ${libro.ISBN}
    Titulo: ${libro.titulo}
    Autor: ${libro.autor}
    Numero de paginas: ${libro.numPaginas}
    `); 
}
function mostrarPorHtml(libro) {
    let mostrar = `
    <p>ISBN: ${libro.ISBN}</p>
    <p>Titulo: ${libro.titulo}</p>
    <p>Autor: ${libro.autor}</p>
    <p>Numero de paginas: ${libro.numPaginas}</p>
    `
    var miDiv = document.getElementById("datos");
    miDiv.innerHTML = mostrar;
    
}

function control() {
    let libro1 = cargarLibro();
    mostrarLibroConsola(libro1);
    mostrarPorHtml(libro1);
    let boton = document.getElementById("boton") 
    boton.style.display = "none"; // para desaparecer el boton
}

//control();



