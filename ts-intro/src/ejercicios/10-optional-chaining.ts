
/*
    ===== Código de TypeScript =====
*/
interface Pasajero{
    name: string;
    sons?: string[];
}

const pasajero1: Pasajero = {
    name: "Raul"
}

const pasajero2: Pasajero = {
    name: "Fernando",
    sons: ["Maria", "Eliza"]
}

function printSons(pasajero: Pasajero): void{
    const cuantosHijos = pasajero.sons?.length | 0;

    console.log(cuantosHijos);
}

printSons(pasajero2)