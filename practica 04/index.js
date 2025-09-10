import readline from 'readline';
import { isNumberObject } from 'util/types';
//INVENTARIO Y OPERACIONES BESICAS CRUD
//producto ={
   // nombre,
   // stock,
   // precio,
   // proveedor{
   // empresa,
   // numero

    //}
//}    
 
//ENTRADA DE DATOS
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//OBJETO PRINCIPAL ESTRUCTURADO
const inventario ={
    //aqui guarda la informacion
    producto:[],
    //con esta funcion guardamos los datos
    agregarProductro: function(){
        //pedimos datos al usuario
        rl.question("Ingresa el nombre del producto: \n", (nombre) => {
        rl.question("Ingresa la cantidad del producto: \n", (cantidad) => {
            rl.question("Ingresa el precio unitario del producto: \n", (precio) => {
            let id = Math.floor(Math.random()*1000 + 1);
            const stock = parseInt(cantidad);
            const decimalPrecio = parseFloat(precio);
            if(nombre && !isNaN(stock) && !isNaN(decimalPrecio)){
                let producto ={
                    id: id,
                    nombre: nombre,
                    cantidad: stock,
                    precio: decimalPrecio,
                    proveedor:{
                        nombreProveedor: "",
                        telefono: ""
                }
            this.producto.push(producto)
                console.log(this.producto)
            }else{
                console.log("no se puede agregar el producto")
            }
            rl.close();
            });
        });  
        });
    }   
};

inventario.agregarProductro();
