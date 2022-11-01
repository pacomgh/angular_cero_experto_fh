
/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento: T){
    return argumento;
} 

let soyString = queTipoSoy("Hola");
let soyNumero = queTipoSoy(28);
let soyArray = queTipoSoy([1,2,3,4,5,6,7]);