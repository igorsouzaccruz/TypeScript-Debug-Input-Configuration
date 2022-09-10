import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoUm implements IAlgoritimo {
  prompt = PromptSync();
  numero: number;
  resultado: string;

  titulo(): string {
    return 'QUESTÃO 1';
  }

  entradaDeDados(): void {
    this.numero = Number(this.prompt('Informe um numero:'));
  }
  processamentoDosDados() {
    const parOuImpar: string = this.numero % 2 === 0 ? 'é par' : 'é impar';
    const positivoOuNegativo = this.numero >= 0 ? 'é positivo' : 'é negativo';
    this.resultado = `O numero ${this.numero} ${parOuImpar} e ${positivoOuNegativo} `;
  }
  saidaDosDados() {
    console.log(this.resultado);
  }
}
