import { IAlgoritimo } from '../interface/algoritimo';

import PromptSync from 'prompt-sync';

export class QuestaoDois implements IAlgoritimo {
  prompt = PromptSync();

  resultado: string;

  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  media: number = 0;
  numeroDeNota: number[] = [this.nota1, this.nota2, this.nota3];

  constructor() {}
  titulo(): string {
    return 'QUESTÃO 2';
  }

  entradaDeDados(): void {
    this.nota1 = Number(this.prompt(' Informe a primeira nota: '));
    this.nota2 = Number(this.prompt(' Informe a segunda nota: '));
    this.nota3 = Number(this.prompt(' Informe a terceira nota: '));
  }
  processamentoDosDados() {
    const somaDasNotas: number = this.nota1 + this.nota2 + this.nota3;
    this.media = somaDasNotas / this.numeroDeNota.length;
    if (this.media === 10) {
      this.resultado = 'APROVADO COM LOUVOR!';
    } else if (this.media >= 7) {
      this.resultado = 'APROVADO!';
    } else {
      this.resultado = 'REPROVADO';
    }
  }
  saidaDosDados() {
    console.log(this.resultado);
  }
}
