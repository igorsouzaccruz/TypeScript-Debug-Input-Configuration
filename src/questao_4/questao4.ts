import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoQuatro implements IAlgoritimo {
  private somaDosNumerosDe1A100: number = 0;

  //ENTRADA DO DADO
  constructor() {
    this.somaDosNumerosInteirosDe1A100();
  }
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
    console.log('- QUESTÃO 04');
    console.log(
      `A soma dos numero inteiros de 1 a 100 é ${this.somaDosNumerosDe1A100}`
    );
  }

  // PROCESSAMENTO DO DADO
  private somaDosNumerosInteirosDe1A100(): void {
    for (let index = 0; index < 100; index++) {
      const numeroNoLaco = index + 1;
      this.somaDosNumerosDe1A100 += numeroNoLaco;
    }
  }
}
