// Fazer um algoritmo que: • Leia um número indeterminado de linhas contendo cada uma a idade de um indivíduo. • A última linha que não entrará nos cálculos, contém o valor da idade igual a zero. • Calcule e escreva a idade média deste grupo de indivíduos. • Escreva também a maior idade e a menor

import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoTres implements IAlgoritimo {
  prompt = PromptSync();
  idade: number[] = [];
  menorIdade: number = 0;
  maiorIdade: number = 0;
  mediaIdades: number = 0;

  titulo(): string {
    return 'QUESTÃO 3';
  }
  entradaDeDados(): void {
    let inputIdade: number = 0;
    do {
      inputIdade = Number(
        this.prompt('Digite idades (escreva (0) para encerrar o programa): ')
      );
      this.idade.push(inputIdade);
    } while (inputIdade != 0);
    this.idade = this.idade.slice(0, -1);
  }
  processamentoDosDados() {
    let somaIdades: number = 0;
    for (let indexIdades = 0; indexIdades < this.idade.length; indexIdades++) {
      if (indexIdades === 0) {
        this.menorIdade = this.idade[indexIdades];
        this.maiorIdade = this.idade[indexIdades];
      }
      this.maiorIdade < this.idade[indexIdades]
        ? (this.maiorIdade = this.idade[indexIdades])
        : this.maiorIdade;
      this.menorIdade > this.idade[indexIdades]
        ? (this.menorIdade = this.idade[indexIdades])
        : this.menorIdade;
      somaIdades += this.idade[indexIdades];
    }
    this.mediaIdades = (somaIdades / (this.idade.length - 1));
  }
  saidaDosDados() {
    console.log(` A média de idades é: ${Number(this.mediaIdades).toFixed(2)}`);
    console.log(` A maior idade é: ${this.maiorIdade}`);
    console.log(` A menor idade é: ${this.menorIdade}`);
  }
}
