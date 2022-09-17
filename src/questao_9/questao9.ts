import { IAlgoritimo } from '../interface/algoritimo';

import PromptSync from 'prompt-sync';

export class QuestaoNove implements IAlgoritimo {
  prompt = PromptSync();

  termoUm: number;
  termoDois: number;
  soma: number;
  operacao: string;

  constructor() {}

  titulo(): string {
    return 'QUESTÃO 9';
  }

  entradaDeDados(): void {
    this.termoUm = 1000;
    this.termoDois = 1;
    this.soma = 0;
    this.operacao = '';
  }
  processamentoDosDados() {
    for (let contador: number = 1; contador <= 50; contador++) {
      if (this.termoUm % 2 == 0) {
        this.soma += this.termoUm / this.termoDois;
      } else {
        this.soma -= this.termoUm / this.termoDois;
      }
      this.operacao += ` ${this.termoUm} / ${this.termoDois}\n`;

      this.termoDois += 1;
      this.termoUm -= 3;
    }
  }
  saidaDosDados() {
    console.log(this.operacao);
    console.log(this.soma);
  }
}
