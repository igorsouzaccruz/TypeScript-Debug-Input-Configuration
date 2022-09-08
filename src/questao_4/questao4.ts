import { IQuestao } from "../interface/iquestao";
import { Questao } from '../heranca/questao';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoQuatro extends Questao implements IAlgoritimo{

    private somaDosNumerosDe1A100: number = 0;

    constructor() {
        super('04');
        // this.entradaDeDados();
        // this.processamentoDosDados();
    }

    entradaDeDados(): void {
        console.log();    
        console.log('- QUESTÃO 04');
        console.log(' Não necessita de entrada de dados.');
        console.log(' Deve calcular a soma dos inteiros dos numeros de 1 a 100');
        this.foiRespondida = true;
    }
    processamentoDosDados() {
        for (let index = 0; index < 100; index++) {
            const numeroNoLaco = index + 1 ;
            this.somaDosNumerosDe1A100 += numeroNoLaco;
        }
        this.resultados.push(` A soma dos numero inteiros de 1 a 100 é ${this.somaDosNumerosDe1A100}`);
    }
}
