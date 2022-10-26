const Contenedor= require('./Contenedor')

const contenedor = new Contenedor();

let productos= {
	nombre:"casio",
    modelo:"fx-95",
    id:1
}
contenedor.createUser(productos)
