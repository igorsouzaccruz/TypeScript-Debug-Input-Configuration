import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoDez implements IAlgoritimo {
  prompt = PromptSync();

  anacleto: number = 1.5;
  felisberto: number = 1.1;
  anos: number = 0;

  titulo(): string {
    return 'QUESTÃO 10';
  }

  entradaDeDados(): void {}
  processamentoDosDados() {
    console.log(` Anacleto tem ${this.anacleto.toFixed(2)}cm de tamanho.`);
    console.log(` Felisberto tem ${this.felisberto.toFixed(2)}cm de tamanho.`);
    console.log('------------------------------------------------------');

    do {
      this.anacleto = this.anacleto + 0.2;
      this.felisberto = this.felisberto + 0.3;
      this.anos = this.anos + 1;
      console.log(` Em ${this.anos} ano(s)`);
      console.log(
        ` Anacleto cresceu 0.2cm, e ficou com ${this.anacleto.toFixed(2)}cm`
      );
      console.log(
        ` Felisberto cresceu 0.3cm, e ficou com ${this.felisberto.toFixed(2)}cm`
      );
    } while (this.felisberto < this.anacleto);
  }
  saidaDosDados() {
    console.log(
      `Logo serão necessários ${this.anos} anos para Felisberto ficar maior que Anacleto.`
    );
  }
}
