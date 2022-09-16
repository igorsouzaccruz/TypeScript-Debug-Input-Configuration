import { IAlgoritimo } from '../interface/algoritimo';

import PromptSync from 'prompt-sync';

export class QuestaoNove implements IAlgoritimo {
  prompt = PromptSync();

  termoUm: number = 1000;
  termoDois: number = 1;
  soma: number = 0;

  constructor() {}

  titulo(): string {
    return 'QUESTÃO 9';
  }

  entradaDeDados(): void {}
  processamentoDosDados() {
    for (let contador: number = 0; contador < 50; contador++) {
      if (this.termoUm % 2 == 0) {
        this.soma += this.termoUm / this.termoDois;
      } else {
        this.soma -= this.termoUm / this.termoDois;
      }
    }
    console.log(
      `${this.termoUm} / ${this.termoDois} - ${(this.termoUm =
        this.termoUm - 3)} / ${(this.termoDois = this.termoDois + 1)}`
    );
  }
  saidaDosDados() {
    console.log(this.soma);
  }
}
