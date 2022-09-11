import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class Questao3 implements IAlgoritimo {
  prompt = PromptSync();

  private idade: number;
  private primeiraEntrada: boolean = true;
  private somaIdades: number = 0;
  private quantidadeIdades: number = 0;
  private mediaIdades: number;
  private maiorIdade: number;
  private menorIdade: number;

  titulo(): string {
    return 'Questao 3';
  }
  entradaDeDados(): void {
    do {
      console.log('Informe a idade: ');
      this.idade = Number(this.prompt(''));
      this.processamentoDosDados();
    } while (this.idade != 0);
  }
  processamentoDosDados() {
    if (this.primeiraEntrada) {
      this.maiorIdade = this.idade;
      this.menorIdade = this.idade;
      this.primeiraEntrada = false;
    }
    if (this.idade != 0) {
      this.somaIdades = this.somaIdades + this.idade;
      this.quantidadeIdades++;
      if (this.idade > this.maiorIdade) {
        this.maiorIdade = this.idade;
      } else if (this.idade < this.menorIdade) {
        this.menorIdade = this.idade;
      }
    }
    this.mediaIdades = this.somaIdades / this.quantidadeIdades;
  }
  saidaDosDados() {
    console.log(`A média das idades é: ${this.mediaIdades}`);
    console.log(`A maior idade é: ${this.maiorIdade}`);
    console.log(`A menor idade é: ${this.menorIdade}`);
  }
}
