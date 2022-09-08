import PromptSync from 'prompt-sync'
import { IQuestao } from '../interface/iquestao';
export abstract class Questao {
    public prompter = PromptSync();
    public foiRespondida: boolean;
    public resposta: string;
    public resultados: Array<string> = [];

    constructor(private _numeroQuestao: string) {

    }

    get numeroQuestao(): string {
        return `- QUESTÃO ${this._numeroQuestao}`
    }
    

    saidaDosDados() {
        console.log(this.numeroQuestao);
        if (this.foiRespondida) {
            this.resultados.forEach(resultado => {
                console.log(resultado);    
            });
            return;
        }
        console.log(' Não respondida!!!');
    }
}