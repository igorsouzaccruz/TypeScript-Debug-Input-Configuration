import { IAlgoritimo } from '../interface/algoritimo';
// Fazer um algoritmo para calcular e escrever a seguinte soma: 37x38/1 + 36x37/2 + 35x36/3 + ... + 1x2/37

export class QuestaoDoze implements IAlgoritimo {
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
    console.log('- QUESTÃO 12');
    console.log(` A soma: 37x38/1 + 36x37/2 + 35x36/3 + ... + 1x2/37`);
    console.log(`Resultado: ${Number(this.somaDosTermosDaSerie()).toFixed(2)}`);
  }

  //PROCESSAMENTO DE DADOS
  private somaDosTermosDaSerie(): number {
    let termoDaSerie: number = 0;
    for (let termo = 0; termo < 36; termo++) {
      termoDaSerie += ((37 - termo) * (38 - termo)) / (termo + 1);
      return termoDaSerie;
    }
  }
}
