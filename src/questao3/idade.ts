export class Idade {
  constructor(
    public temperatura: number,
    public idadeMaior: number,
    public idadeMenor: number,
    public somaIdades: number,
    public mediaIdades: number,
    public quantidadeIdades: number,
    public primeiraEntrada: boolean
  ) {}

  public calcularMediaIdades(): void {
    this.mediaIdades = this.somaIdades / this.quantidadeIdades;
  }
}
