

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['bash', 'counter', 'healing'];

interface Personaje {
    name: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    name: 'Paco',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing'],
}

console.table(personaje)

