export class Idade {
  public idadeDigitada: number;
  public primeiraEntrada: boolean = true;
  public somaIdades: number = 0;
  public quantidadeIdades: number = 0;
  public mediaIdades: number;
  public idadeMaior: number;
  public idadeMenor: number;

  constructor() {}

  public calcularMediaIdades(): void {
    this.mediaIdades = this.somaIdades / this.quantidadeIdades;
  }

  public verificarPrimeiraEntrada(): void {
    if (this.primeiraEntrada) {
      this.idadeMaior = this.idadeDigitada;
      this.idadeMenor = this.idadeDigitada;
      this.primeiraEntrada = false;
    }
  }

  public verificarMenorEMaiorIdade(): void {
    if (this.idadeDigitada > this.idadeMaior) {
      this.idadeMaior = this.idadeDigitada;
    } else if (this.idadeDigitada < this.idadeMenor) {
      this.idadeMenor = this.idadeDigitada;
    }
  }
}
