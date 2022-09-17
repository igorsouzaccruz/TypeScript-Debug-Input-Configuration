import { IAlgoritimo } from '../interface/algoritimo';

// Fazer um algoritmo que calcule e escreva a soma dos 50 primeiros termos da seguinte série: 1000/1 - 997/2 + 994/3 - 991/4 + ...
export class QuestaoNove implements IAlgoritimo {
  private somaDos50TermosDaSerie: number = 1000;

  entradaDeDados(): void {
    console.log('Não precisa de entrada de dados');
  }
  processamentoDosDados() {
    //1000/1(n) - 997/2 + 994/3 - 991/4

    const base = 1000;
    let resultado = base;
    let deveSubtrair = true;

    for (let auxiliar = 0; auxiliar < 50; auxiliar++) {
      const dividendo = base - 3 * auxiliar;
      const divisor = auxiliar + 1;

      if (deveSubtrair) {
        resultado -= dividendo / divisor;
      } else {
        resultado += dividendo / divisor;
      }
      deveSubtrair = !deveSubtrair;
    }

    this.somaDos50TermosDaSerie = resultado;

    /*
    let termoDaSerie: number;
    for (let termo = 0; termo < 50; termo++) {
      termoDaSerie = (1000 - termo * 3) / (termo + 1);
      termo % 2 === 0
        ? (this.somaDos50TermosDaSerie -= termoDaSerie)
        : (this.somaDos50TermosDaSerie += termoDaSerie);
    }
    */
  }
  saidaDosDados() {
    console.log(
      `A soma dos 50 primeiros termos da seguinte série: 1000/1 - 997/2 + 994/3 - 991/4 + ... `
    );
    console.log(`Resultado: ${Number(this.somaDos50TermosDaSerie).toFixed(2)}`);
  }
}
