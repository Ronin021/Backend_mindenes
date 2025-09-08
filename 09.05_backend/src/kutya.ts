export interface IKutya {
    "id": number | null;
    "nev": string;
    "fajta": string;
    "nem": boolean;
    "eletkor": number;
    "kepUrl": string|null;
}






export default class Kutya {

    

    "id": number|null;
    "nev": string;
    "fajta": string;
    "nem": boolean;
    "eletkor": number;
    "kepUrl": string|null;

    constructor( kutyaobj:IKutya ) {
        this.id = kutyaobj.id
        this.nev = kutyaobj.nev
        this.fajta = kutyaobj.fajta
        this.nem = kutyaobj.nem
        this.eletkor = kutyaobj.eletkor
        this.kepUrl = kutyaobj.kepUrl
    }

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



}