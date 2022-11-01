import { Producto, calculateISV } from './06-desestrcturacion-argumentos';

/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        description: 'iPad Air 2',
        price: 550
        
    },
    {
        description: 'Nokia 3350',
        price: 350
    
    }
]

const [total, isv] = calculateISV(carritoCompras);
console.log("total:",total);
console.log("ISV:",isv);
