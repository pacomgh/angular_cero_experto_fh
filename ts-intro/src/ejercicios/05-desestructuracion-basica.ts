

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volume: number;
    second: number;
    song: string;
    details: Details
}

interface Details{
    autor: string;
    year: number
}

const reproductor: Reproductor = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details:{
        autor: 'Ed Sheeran',
        year: 2015
    }
}

const { volume, second, song, details } = reproductor;
const { autor } = details;

/* console.log('El volumen es: ', volume)
console.log('El segundo actual es: ', second)
console.log('La cancion es: ', song)
console.log('El autor es: ', autor) */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ , ,p3 ] = dbz;

/* console.log("Personaje 1",p3);
console.log("Personaje 2",p2); */
console.log("Personaje 3",p3);