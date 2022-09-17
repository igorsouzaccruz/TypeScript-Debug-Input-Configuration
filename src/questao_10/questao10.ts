import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoDez implements IAlgoritimo {
  prompt = PromptSync();

  anacleto: number = 150;
  felisberto: number = 110;
  anos: number = 0;
  crescimentoEmAnos: string = '';

  titulo(): string {
    return 'QUESTÃO 10';
  }

  entradaDeDados(): void {}
  processamentoDosDados() {
    console.log(` Anacleto tem ${this.anacleto}cm de tamanho.`);
    console.log(` Felisberto tem ${this.felisberto}cm de tamanho.`);
    console.log('------------------------------------------------------');

    do {
      this.anacleto = this.anacleto + 2;
      this.felisberto = this.felisberto + 3;
      this.anos = this.anos + 1;
      this.crescimentoEmAnos +=
        '------------------------------------------------------\n';
      this.crescimentoEmAnos += ` Em ${this.anos} ano(s)\n`;
      this.crescimentoEmAnos += ` Anacleto cresceu 2cm, e ficou com ${this.anacleto}cm\n`;
      this.crescimentoEmAnos += ` Felisberto cresceu 3cm, e ficou com ${this.felisberto}cm\n`;
    } while (this.felisberto <= this.anacleto);
  }
  saidaDosDados() {
    console.log(this.crescimentoEmAnos);
    console.log(
      `Logo serão necessários ${this.anos} anos para Felisberto ficar maior que Anacleto.`
    );
  }
}
