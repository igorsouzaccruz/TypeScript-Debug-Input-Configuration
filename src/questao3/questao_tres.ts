import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
import { Idade } from './idade';
export class Questao3 implements IAlgoritimo {
  prompt = PromptSync();
  private idade = new Idade();

  titulo(): string {
    return 'Questao 3';
  }
  entradaDeDados(): void {
    do {
      console.log('Informe a idade: ');
      this.idade.idadeDigitada = Number(this.prompt(''));
      this.processamentoDosDados();
      console.log(this.idade.idadeDigitada, 'teste');
    } while (this.idade.idadeDigitada != 0);
  }
  processamentoDosDados() {
    this.idade.verificarPrimeiraEntrada();
    if (this.idade.idadeDigitada != 0) {
      this.idade.somaIdades = this.idade.somaIdades + this.idade.idadeDigitada;
      this.idade.quantidadeIdades++;
      this.idade.verificarMenorEMaiorIdade();
    }
    this.idade.calcularMediaIdades();
  }
  saidaDosDados() {
    console.log(`A média das idades é: ${this.idade.mediaIdades}`);
    console.log(`A maior idade é: ${this.idade.idadeMaior}`);
    console.log(`A menor idade é: ${this.idade.idadeMenor}`);
  }
}
