//Aca cree la clase usuario donde se encuentran todos los datos solicitaods//

class usuario {
    constructor(nombre, apellido, mascotas, libros) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;

    }
    //Aca agregue los metodos solicitados en el desafio//
    getFullName() {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }
    addMascotas(mascota) {
        this.mascotas.push(mascota)
    }
    addBook(libro) {
        this.libros.push(libro)
    }

    countMascotas() {
        console.log(this.mascotas.length)
    }
    getBookName() {
         this.libros.map(object =>{console.log("los titulos leidos son "+object.titulo);});
    }

}
//Aca definimos el usuario con sus nuevos valores 
const user1 = new usuario('Andres', 'Martinez', ["perro", "gato","jaguar"], [{
    titulo: "Algebra I",
    autor: "Pepe"
}, {
    titulo: "Matematica IV",
    autor: 'Aristoteles'
}])
// Aca dejo un console.log para que se aprecie los valores obtenigos con la logica anterior//


// console.log(user1)


//Luego de ver como teniamos el usuario predeterminado, mostramos los cambios del desafio
user1.getFullName() 
user1.addMascotas("fifi")
user1.addBook({titulo: "Titanic",autor: "Gabriel garcia marquez"})
console.log(user1)
user1.countMascotas()
user1.getBookName()