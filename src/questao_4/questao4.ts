import { IQuestao } from "../interface/iquestao";

export class QuestaoQuatro implements IQuestao{

    private somaDosNumerosDe1A100: number = 0;

    //ENTRADA DO DADO
    constructor() {
        this.somaDosNumerosInteirosDe1A100();
    }
    // PROCESSAMENTO DO DADO
    private somaDosNumerosInteirosDe1A100(): void {
        for (let index = 0; index < 100; index++) {
            const numeroNoLaco = index + 1 ;
            this.somaDosNumerosDe1A100 += numeroNoLaco;
        }
    }
    // PROCESSAMENTO DO DADO

    mostrarSaidaDeDados(): void {
        console.log('------------ QUESTÃO 4 ------------');
        console.log(`A soma dos numero inteiros de 1 a 100 é ${this.somaDosNumerosDe1A100}` )
        console.log('------------      FIM       ------------');
    }
}
