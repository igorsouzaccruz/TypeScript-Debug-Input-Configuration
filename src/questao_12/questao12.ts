import { IAlgoritimo } from '../interface/algoritimo';
// Fazer um algoritmo para calcular e escrever a seguinte soma: 37x38/1 + 36x37/2 + 35x36/3 + ... + 1x2/37

export class QuestaoDoze implements IAlgoritimo {
  termoDaSerie: number = 0;

  titulo(): string {
    return 'QUESTÃO 12';
  }
  entradaDeDados(): void {
    console.log('Não necessita entrada de dados');
  }
  processamentoDosDados() {
    let base = 38;

    for (let indice = 0; indice < 36; indice++) {
      const termoDaDireita = base - indice;
      const termoDaEsquerda = termoDaDireita - 1;
      const dividendo = termoDaEsquerda * termoDaDireita;
      const divisor = indice + 1;
      this.termoDaSerie += dividendo / divisor;
    }
  }
  saidaDosDados() {
    console.log(` A soma: 37x38/1 + 36x37/2 + 35x36/3 + ... + 1x2/37`);
    console.log(
      `Resultado: ${this.termoDaSerie
        .toString()
        .substring(0, this.termoDaSerie.toFixed(2).length)}`
    );
  }
}
