class Contenedor{
    constructor(nombre,precio,tumbnail,id){
        this.nombre=nombre
        this.precio=precio
        this.tumbnail=tumbnail
        this.id=id

    }
    save = async objeto => {
		const objs = await this.getAll();
		try {
			let newId;
			if(objs.length === 0){
                newId = 1
            }else{
                newId = objs[objs.length - 1].id + 1;

            }
			const newObj = { ...objeto, id: newId };
			objs.push(newObj);
			await this.writeFile(objs);
			return newObj.id;
		} catch (error) {
			console.log(error);
		}
	};
    getAll(){
        
    }
    getById(){

    }
    deleteAll(){

    }
    deleteById(){

    }
}
const products = new Contenedor('../products.json');