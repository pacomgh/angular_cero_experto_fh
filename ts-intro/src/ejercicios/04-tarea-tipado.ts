

console.log('Hola Mundo!!!!!');

/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address,
    showDirection: () => string;
}

interface Address{
    street: string;
    country: string;
    city: string;

}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 20,
    address: {
        street: 'Mains ST',
        country: 'USA',
        city: 'NY'
    },
    showDirection(){
        return this.name+', '+this.address.city+', '+this.address.country;
    }
}

const direction = superHero.showDirection()
console.log(direction);
