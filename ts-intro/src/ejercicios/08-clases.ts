
/*
    ===== Código de TypeScript =====
*/

class NormalPerson{
    constructor(
        public name: string,
        public address: string
    ){}
}

class Hero extends NormalPerson{
    /* alterEgo: string;
    age: number;
    realName: string; */
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ){
        super(realName, 'Avengers Tower')
    }
}

const ironman = new Hero('Iron Man', 32, 'Tony Stark');
console.log(ironman)
