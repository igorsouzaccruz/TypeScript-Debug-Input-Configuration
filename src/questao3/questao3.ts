import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoTres implements IAlgoritimo {
  prompt = PromptSync()
  idade: number[] = [];
  idadeMenor: number = 0;
  idadeMaior: number = 0;
  idadeMedia: number = 0;  

  titulo(): string {
    return 'QUESTÃO 3'
  }

  entradaDeDados(): void {
    let todasIdade: number = 0;
    do {
      todasIdade = Number(
        this.prompt('Digite a idade do indivíduo (escreva (0) para encerrar o software): '));
        this.idade.push(todasIdade);
    } while (todasIdade !== 0) {
      this.idade = this.idade.slice(0, -1);
    }
  }

  processamentoDosDados() {
    let somaIdades: number = 0;
    for (let idades = 0; idades < this.idade.length; idades++) {
      if (idades === 0) {
        this.idadeMenor = this.idade[idades];
        this.idadeMaior = this.idade[idades];
      }
      this.idadeMaior < this.idade[idades] ? this.idadeMaior = this.idade[idades] 
       : this.idadeMaior;
      this.idadeMenor > this.idade[idades] ? this.idadeMenor = this.idade[idades]
       : this.idadeMenor;
      somaIdades += this.idade[idades];
    }
    this.idadeMedia = (somaIdades / (this.idade.length -1 ));
  }

  saidaDosDados() {
    console.log(`A idade média é: ${Number(this.idadeMedia).toFixed(2)} `);
    console.log(`A idade maior é: ${this.idadeMaior}`);
    console.log(`A idade menor é: ${this.idadeMenor}`);
  }
}
