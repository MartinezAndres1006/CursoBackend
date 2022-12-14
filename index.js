const Contenedor= require('./contenedor.js')

const contenedor = new Contenedor();
const file= './products.txt'
let productosLista= [{
	nombre:"casio",
    modelo:"fx-95",
    id:1
},{
	nombre:"calculadora",
    modelo:"fx-570",
    id:2
},{
	nombre:"kemeii",
    modelo:"fx-95",
    id:3
}]

function test(){
let tiendita= contenedor.createFile("./products.txt")

const archivoDeTienda = contenedor.createFile(file);
tiendita ? guardarproductos(): console.log('No se pudo guardar productos');
tiendita ? obtenerProductos() : console.log('No se pudo leer productos');
const obtenerproducto = archivoDeTienda ? obtenerporId(1) : null;
obtenerproducto ? eliminarPorid(1) : null;
termina();

function guardarproductos(){
    productosLista.map(product=>{contenedor.save(product,file)})
}
function obtenerProductos(){
    let loquehay =contenedor.read(file)
    console.log(loquehay)
}
function obtenerporId(id){   
    const product = contenedor.getById(id, file);
    product ? console.log(product): console.log('Producto no encontrado');
    return product ?  true : false;
}
function eliminarPorid(id){
    let clear=contenedor.deleteById(id,file)
        console.log(clear)
}

function termina(){
contenedor.deleteAll(file)
console.log("Sigue corriendo...")
}
}
test()