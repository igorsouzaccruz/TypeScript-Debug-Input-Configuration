import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoDois implements IAlgoritimo {
  prompt = PromptSync();

  nota1: number;
  nota2: number;
  nota3: number;
  media: number;

  resultado: string;

  entradaDeDados(): void {
    this.nota1 = Number(this.prompt('Informe a nota 1: '));
    this.nota2 = Number(this.prompt('Informe a nota 2: '));
    this.nota3 = Number(this.prompt('Informe a nota 3: '));
  }

  processamentoDosDados(): void {
    this.media = (this.nota1 + this.nota2 + this.nota3) / 3;

    const ehAprovado = this.media >= 7;

    if (ehAprovado) {
      this.resultado = ' Aprovado';
      const comLouvor = this.media === 10;
      this.resultado = ` Aprovado ${comLouvor ? 'com louvor ' : ''}`;
    } else {
      this.resultado = ' Reprovado';
    }
  }

  saidaDosDados(): void {
    console.log(this.resultado);
  }
}
