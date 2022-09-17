import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoCinco implements IAlgoritimo {
  prompt = PromptSync();
  //Dados passados para processamento - ENTRADA DO DADO
  b: number;
  a: number;
  //SAÍDA DO DADO
  somaDosNumerosPares: number = 0;
  numerosCompreendidos: number[] = [];

  entradaDeDados(): void {
    console.log(
      '  - Informe 2 valores para calcular a soma dos cubos dos numeros pares'
    );
    this.a = Number(this.prompt(' Informe o valor de A:'));
    this.b = Number(this.prompt(' Informe o valor de B:'));
  }
  processamentoDosDados() {
    if (this.b > this.a) {
      for (let entreAeB: number = this.a; entreAeB <= this.b; entreAeB++) {
        if (entreAeB % 2 === 0) {
          let addParesCompreendidos = entreAeB;
          this.numerosCompreendidos.push(addParesCompreendidos);
          this.somaDosNumerosPares += Math.pow(entreAeB, 3);
        }
      }
    }
  }
  saidaDosDados() {
    console.log(
      `- Resultado da soma dos cubos dos numeros pares entre ${this.a} e ${this.b}`
    );

    if (this.a < this.b) {
      console.log(`${this.somaDosNumerosPares}`);
      console.log(`${this.numerosCompreendidos}`);
    } else {
      console.log(' A é maior que B, logo, não pode ser processado.');
    }
  }
}
