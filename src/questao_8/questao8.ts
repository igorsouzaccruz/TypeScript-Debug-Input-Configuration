import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoOito implements IAlgoritimo {
  prompt = PromptSync();

  a: number;
  b: number;
  entreAeB: number;
  resultado: string = '';
  numerosPrimos: number[] = [];

  titulo(): string {
    return 'QUESTÃO 8';
  }

  entradaDeDados(): void {
    this.a = Number(
      this.prompt(' Informe um número natural e positivo como valor inicial: ')
    );
    this.b = Number(
      this.prompt(' Informe um número natural e positivo como valor final: ')
    );
  }

  processamentoDosDados() {
    if (this.a < 0 || this.b < 0) {
      this.resultado += 'Nenhum número deve ser manor que 0(zero).';
      return;
    }
    const bEhMaiorQueA = this.b > this.a;
    if (bEhMaiorQueA) {
      for (let entreAeB = this.a; entreAeB <= this.b; entreAeB++) {
        if (entreAeB === 1) {
          continue;
        }
        let ehPrimo = true;
        for (let divisor = 2; divisor < entreAeB; divisor++) {
          if (entreAeB % divisor == 0) {
            ehPrimo = false;
            break;
          }
        }
        if (ehPrimo) {
          this.numerosPrimos.push(entreAeB);
        }
      }
      this.resultado += `Os primos entre ${this.a} e ${this.b} `;
      const nenhumPrimoEncontrado = this.numerosPrimos.length === 0;
      if (nenhumPrimoEncontrado) {
        this.resultado += 'não existem';
        return;
      }
      const variosPrimosEncontrados = this.numerosPrimos.length > 1;
      this.resultado += ` ${variosPrimosEncontrados ? 'são' : 'é'} ${
        this.numerosPrimos
      }`;
    } else {
      this.resultado += 'O número inicial não deve ser maior que o final.';
    }
  }

  saidaDosDados() {
    console.log(this.resultado);
  }
}
