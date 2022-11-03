const express = require('express')
const Contenedor = require('./contenedor')
const app = express()

const server = app.listen(8080, () => console.log('Server Up'))
let products= []

function test(){
    products= obtenerProductos()
    console.log('Los productos existentes son', products)
}

// Aca esta la pagina de inicio

app.get('/',(req,res)=>{
    res.send('<h1>Hola, Mi nombre es andres martinez y me gusta programar</h1>')
    
})
app.get('/products',(req,res)=>{
     res.send(products)
    })

    app.get('/productsrandom',(req,res)=>{
        res.send(productoRandom())
       })



function obtenerProductos(){
   const contenedor= new Contenedor()
    const file='./products.txt'
    const products= contenedor.read(file)
    return products
}

function productoRandom(){
    const contenedor= new Contenedor()
    const file='./products.txt'
    const products= contenedor.read(file)
    const aleatorio = Math.floor(Math.random() * products.length);
    return products[aleatorio]
}
test()