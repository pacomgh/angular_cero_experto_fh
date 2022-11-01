

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number{
    return a+b;
}

const sumarFlecha = (a,b) =>{
    return a+b;
}

function multiplicar(numero: number, otroNumero?:number, base:number=2)
:number{
    return numero*base;
}

const resultado = multiplicar(5, 10);

interface PersonajeLOR{
    name: string;
    hp: number;
    showHp: () => void;
}

function heal( personaje: PersonajeLOR, healX: number ): void{
    personaje.hp += healX;
    console.log(personaje);
}

const newCharacter: PersonajeLOR = {
    name: 'paco',
    hp: 100,
    showHp(){
        console.log("healt points ",this.hp)
    }
}

heal(newCharacter, 20);
newCharacter.showHp();
