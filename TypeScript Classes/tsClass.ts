class Player {
    name: string;
    age: number;
    country:string;

    constructor(n:string, a:number, c:string){
        this.name = n;
        this.age = a;
        this.country = c
    }

    play() {
        console.log(`${this.name} from ${this.country}`)
    }

}

const mashRafi = new Player('Mashrafi', 40, 'Bangladesh')
const shakib = new Player('Shakib', 40, 'Bangladesh')


// we can convert it as a array of object.
const player: Player[] = [];

player.push(shakib)
player.push(mashRafi)