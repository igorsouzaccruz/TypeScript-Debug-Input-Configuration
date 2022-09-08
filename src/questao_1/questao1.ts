import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";
import { IQuestao } from "../interface/iquestao";

export class QuestaoUm extends Questao implements IAlgoritimo {

    private numero: number;

    constructor() {
        super('01');
        // this.entradaDeDados();
        // this.processamentoDosDados();
    }

    entradaDeDados(): void {
        console.log('- QUESTÃO 01');
        do {
            console.log(' Informe um numero inteiro ou digite S para sair da questão')
            this.resposta = this.prompter('');
            if (this.resposta.toUpperCase() == 'S') {
                break;
            }
        } while (this.resposta === '' || !Number.isInteger(Number(this.resposta)));

        if (Number.isInteger(Number(this.resposta))){
            this.numero = Number(this.resposta);
            this.foiRespondida = true;
        }
    }
    processamentoDosDados() {
        if (this.foiRespondida){
            const parOuImpar: string = this.isPar() ? "par" : "impar";
            const positivoOuNegativo: string = this.isPositive() ? "positivo" : "negativo";
            this.resultados.push(` O numero ${this.numero} é ${parOuImpar} e é ${positivoOuNegativo}`);
        }
    }
   
    private isPar(): boolean {
        return (this.numero % 2) === 0;
    }

    private isPositive(): boolean {
        return this.numero >= 0;
    }
}
