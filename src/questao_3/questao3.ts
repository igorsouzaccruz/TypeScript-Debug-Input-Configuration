import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoTres implements IAlgoritimo {
  prompt = PromptSync();

  idades: number[] = [];
  maiorIdade: number = 0;
  menorIdade: number = 0;
  totalIdade: number = 0;
  media: number = 0;

  titulo(): string {
    return 'QUESTÃO 3';
  }

  entradaDeDados(): void {
    this.totalIdade = Number(this.prompt(' Escreva a quantidade de idades: '));

    for (let i: number = 0; i < this.totalIdade; i++) {
      this.idades.push(Number(this.prompt(` Informe a idade ${i + 1}: `)));
    }
  }
  processamentoDosDados() {
    let somaDasIdades: number = 0;
    for (let i: number = 0; i < this.idades.length; i++) {
      if (this.idades[i] > this.maiorIdade) {
        this.maiorIdade = this.idades[i];
      }
      if (this.idades[i] < this.menorIdade) {
        this.menorIdade = this.idades[i];
      }
      somaDasIdades += this.idades[i];
    }
    this.media = somaDasIdades / this.totalIdade;
  }
  saidaDosDados() {
    console.log(`A média das idades é: ${this.media}`);
    console.log(`A maior idade é: ${this.maiorIdade}`);
    console.log(`A menor idade é: ${this.menorIdade}`);
  }
}
