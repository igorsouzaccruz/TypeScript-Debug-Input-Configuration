import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoDoze implements IAlgoritimo {
  prompt = PromptSync();

  n1: number;
  n2: number;
  n3: number;
  soma: number = 0;
  //Fazer um algoritmo para calcular e escrever a seguinte soma: 37x38/1
  //+ 36x37/2 + 35x36/2 + ... + 1x2/37
  titulo(): string {
    return 'QUESTÃO 12';
  }

  entradaDeDados(): void {
    this.n1 = 37;
    this.n2 = 38;
    this.n3 = 1;
  }
  processamentoDosDados() {
    for (let contador: number = 0; contador <= this.n1; contador++) {
      if (this.n1 > this.n3) {
        this.soma += (this.n1 * this.n2) / this.n3;
      }
    }
    this.n1 = this.n1 - 1;
    this.n2 = this.n2 - 1;
    this.n3 = this.n3 + 1;
  }
  saidaDosDados() {
    console.log(this.soma);
  }
}
