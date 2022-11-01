

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    description: string;
    price: number;
}

const tableta: Producto = {
    description: 'iPad Air 2',
    price: 550
    
}
const telefono: Producto = {
    description: 'Nokia 3350',
    price: 350

}

export function calculateISV(productos: Producto[]): [number, number] {
    
    let total=0;

   /*  productos.forEach( (producto) => {
        total+=producto.price;        
    }); */
    productos.forEach( ({price}) => {
        total+=price;        
    });

    //total*=0.15;

    return [total, total*.015];
}

const articulos = [telefono, tableta];
const [total, isv] = calculateISV(articulos);
console.log("total:",total)
console.log("ISV:",isv)