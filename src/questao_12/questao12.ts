import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoDoze implements IAlgoritimo {
  prompt = PromptSync();

  n1: number;
  n2: number;
  n3: number;
  soma: number;
  operacao: string;
  titulo(): string {
    return 'QUESTÃO 12';
  }

  entradaDeDados(): void {
    this.n1 = 37;
    this.n2 = 38;
    this.n3 = 1;
    this.soma = 0;
    this.operacao = '';
  }
  processamentoDosDados() {
    for (let contador: number = 0; contador < 37; contador++) {
      this.soma += (this.n1 * this.n2) / this.n3;
      this.operacao += ` ${this.n1} x ${this.n2} / ${this.n3}\n`;
      this.n1 -= 1;
      this.n2 -= 1;
      this.n3 += 1;
    }
  }
  saidaDosDados() {
    console.log(this.operacao);
    console.log(this.soma);
  }
}
