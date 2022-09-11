import { IAlgoritimo } from '../interface/algoritimo';
// Fazer um algoritmo para calcular e escrever a seguinte soma: 37x38/1 + 36x37/2 + 35x36/3 + ... + 1x2/37

export class QuestaoDoze implements IAlgoritimo {
  termoDaSerie:number = 0;

  titulo(): string {
    return 'QUESTÃO 12';
  }
  entradaDeDados(): void {
    console.log('Não necessita entrada de dados');
  }
  processamentoDosDados() {
     for (let termo = 0; termo < 36; termo++) {
       this.termoDaSerie += ((37 - termo) * (38 - termo)) / (termo + 1);
       return this.termoDaSerie;
     }
  }
  saidaDosDados() {
    console.log(` A soma: 37x38/1 + 36x37/2 + 35x36/3 + ... + 1x2/37`);
    console.log(`Resultado: ${Number(this.termoDaSerie).toFixed(2)}`);
  }
}
