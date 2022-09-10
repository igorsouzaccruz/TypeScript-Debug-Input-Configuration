import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoUm implements IAlgoritimo {
  prompt = PromptSync();
  numero: number = 0;

  resultado: string = '';

  entradaDeDados(): void {
    this.numero = Number(this.prompt(' Informe um numero:'));
  }

  processamentoDosDados() {
    const parOuImpar: string = this.numero % 2 === 0 ? 'par' : 'impar';
    const positivoOuNegativo: string =
      this.numero >= 0 ? 'positivo' : 'negativo';

    this.resultado = ` O numero ${this.numero} é ${parOuImpar} e é ${positivoOuNegativo}`;
  }

  saidaDosDados() {
    console.log('- QUESTÃO 01');
    console.log(this.resultado);
  }
}
