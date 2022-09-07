import { IQuestao } from "../interface/iquestao";

export class QuestaoUm implements IQuestao{

    //ENTRADA DO DADO
    constructor(private numero: number) {}
    // PROCESSAMENTO DO DADO
    private isPar(): boolean {
        return (this.numero % 2) === 0;
    }

    private isPositive(): boolean {
        return this.numero >= 0;
    }
    // PROCESSAMENTO DO DADO

    mostrarSaidaDeDados(): void {
        console.clear();
        console.log('------------ SAIDA DE DADOS ------------');
        const parOuImpar: string = this.isPar() ? "par" : "impar";
        const positivoOuNegativo: string = this.isPositive() ? "positivo" : "negativo";
        console.log(`O numero ${this.numero} é ${parOuImpar} e é ${positivoOuNegativo}` )
        console.log('------------ ##### ## ##### ------------');
    }
}
