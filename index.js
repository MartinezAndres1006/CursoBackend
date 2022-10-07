class usuario{
    constructor(nombre,apellido,libros,mascotas){
this.nombre=nombre;
this.apellido=apellido;
this.libros={};
this.mascotas=[];

    }
    getFullName()
    addMascotas(mascota){
        this.mascotas.push(mascota)
    }
    addBook(libro){
        this.libros.push(libro)
    }
    
    countMascotas()
    getBookName()

}


const user= new usuario("Andres","Martinez")

console.log(user)