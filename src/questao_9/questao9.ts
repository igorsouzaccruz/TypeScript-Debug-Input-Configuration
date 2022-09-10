import { IAlgoritimo } from '../interface/algoritimo';

// Fazer um algoritmo que calcule e escreva a soma dos 50 primeiros termos da seguinte série: 1000/1 - 997/2 + 994/3 - 991/4 + ...
export class QuestaoNove implements IAlgoritimo {
  private somaDos50TermosDaSerie: number = 1000;

  constructor() {
    this.somaDosTermosDaSerie();
  }
  titulo(): string {
    return 'QUESTÃO 9';
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

  public mostrarResultado(): void {
    console.log('- QUESTÃO 09');
    console.log(
      `A soma dos 50 primeiros termos da seguinte série: 1000/1 - 997/2 + 994/3 - 991/4 + ... `
    );
    console.log(`Resultado: ${Number(this.somaDos50TermosDaSerie).toFixed(2)}`);
  }

  //PROCESSAMENTO DE DADOS
  private somaDosTermosDaSerie(): void {
    let termoDaSerie: number;
    for (let termo = 0; termo < 50; termo++) {
      termoDaSerie = (1000 - termo * 3) / (termo + 1);
      termo % 2 === 0
        ? (this.somaDos50TermosDaSerie += termoDaSerie)
        : (this.somaDos50TermosDaSerie -= termoDaSerie);
    }
  }
}
