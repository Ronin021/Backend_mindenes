export interface IKutya {
    "id": number | null;
    "nev": string;
    "fajta": string;
    "nem": boolean;
    "eletkor": number;
    "kepUrl": string|null;
}
class Valami {
    name : string = "valami";
    x = 0;
    y = 1;
}

const valmi = new Valami();
valmi.x=5;
valmi.y=6;

console.log(valmi.x);
console.log(valmi.y);





export default class Kutya implements IKutya {



    



    constructor( kutyaobj:IKutya ) {
        this.id = kutyaobj.id
        this.nev = kutyaobj.nev
        this.fajta = kutyaobj.fajta
        this.nem = kutyaobj.nem
        this.eletkor = kutyaobj.eletkor
        this.kepUrl = kutyaobj.kepUrl
    }
    "id": number|null;
     "nev": string;
     "fajta": string;
     "nem": boolean;
     "eletkor": number;
     "kepUrl": string|null;


     


  
    get Id() {
        return this.id;
    }
    set Id(value: number | null) {
        this.id = value;
    }

    public dog(): IKutya {
        const dog:IKutya = {
            id: this.id,
            nev: this.nev,
            fajta: this.fajta,
            nem: this.nem,
            eletkor: this.eletkor,
            kepUrl: this.kepUrl
        }
        return dog
    }



    public dogs(dogs1:IKutya[]): IKutya []{
        const dogs:IKutya[] =[]
        dogs.push(...dogs1);
        return dogs
    }

    
}
