// -------- Ejercicio 14 -----------
// Crear un objeto libro que contenga las siguientes propiedades:
// ISBN, Título, Autor, Número de páginas. 
// Crear un método para cargar un libro pidiendo los datos al usuario
// y luego informar mediante otro método el número de ISBN,
// el título, el autor del libro y el numero de páginas.

const Libro = {
    ISBN: "",
    titulo: "", 
    autor: "",
    numPaginas: 0,


    cargarLibro: function() {
        this.ISBN = prompt("Introduce el ISBN del libro:");
        this.titulo = prompt("Ingrese el titulo del libro");
        this.autor = prompt("Ingrese el nombre del autor:");
        this.numPaginas = parseInt(prompt("Introduce el número de páginas del libro:"));
    }
}

function mostrarLibro(Libro) {
    console.log(Libro.ISBN);
    console.log(Libro.titulo);
    console.log(Libro.autor);
    console.log(Libro.numPaginas);
}

   

//    mostrarLibro: function(){
//         console.log("ISBN: " + this.ISBN);
//         comsole.log("Titulo: " + this.titulo);
//         console.log("Autor: " + this.autor);
//         console.log("Numero de paginas: " + this.numPaginas);
//    }



const miLibro = Object.create(Libro);
Libro.cargarLibro();
console.log("Información del libro:");
mostrarLibro(Libro);




