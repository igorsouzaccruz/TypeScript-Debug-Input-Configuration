export class Candidato {
    private _votos: number = 0;
    constructor(private _id: number, private _nome: string){};

    public get id() {
        return this._id;
    }

    public get nome() {
        return this._nome;
    }

    public get votos() {
        return this._votos;
    }

    public addVoto() {
        this._votos++;
    }
}