import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoOito implements IAlgoritimo {
  prompt = PromptSync();

  a: number;
  b: number;
  entreAeB: number;
  resultado: string;
  numerosPrimos: number[] = [];

  titulo(): string {
    return 'QUESTÃO 8';
  }

  entradaDeDados(): void {
    this.a = Number(this.prompt(' Informe o valor inicial: '));
    this.b = Number(this.prompt(' Informe o valor final: '));
  }

  processamentoDosDados() {
    if (this.b > this.a) {
      for (let entreAeB = this.a; entreAeB <= this.b; entreAeB++) {
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
    }
  }
  saidaDosDados() {
    console.log(`O número ${this.numerosPrimos} `);
  }
}
