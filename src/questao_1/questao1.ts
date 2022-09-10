import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoUm implements IAlgoritimo {
  //ENTRADA DO DADO
  constructor(private numero: number) {}
  entradaDeDados(): void {
    throw new Error('Method not implemented.');
  }
  processamentoDosDados() {
    throw new Error('Method not implemented.');
  }
  saidaDosDados() {
    throw new Error('Method not implemented.');
  }

  // SAIDA DE DADOS
  public mostrarResultado(): void {
    console.log('- QUESTÃO 01');
    const parOuImpar: string = this.isPar() ? 'par' : 'impar';
    const positivoOuNegativo: string = this.isPositive()
      ? 'positivo'
      : 'negativo';
    console.log(
      `O numero ${this.numero} é ${parOuImpar} e é ${positivoOuNegativo}`
    );
  }

  // PROCESSAMENTO DO DADO
  private isPar(): boolean {
    return this.numero % 2 === 0;
  }

  private isPositive(): boolean {
    return this.numero >= 0;
  }
}
