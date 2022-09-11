import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoOito implements IAlgoritimo {
  prompt = PromptSync();
  numero_A: number = 0;
  numero_B: number = 0;
  numerosPrimos: number[] = [];

  titulo(): string {
    return 'QUESTÃO 8';
  }
  entradaDeDados(): void {
    console.log(' Iremos identificar os números primos dentro de um range: ');
    this.numero_A = Number(this.prompt(' Digite o valor inicial do range: '));
    do {
      this.numero_B = Number(this.prompt(' Digite o valor final do range: '));
    } while (this.numero_B <= this.numero_A);
  }
  processamentoDosDados() {
    for (let num = this.numero_A; num < this.numero_B; num++) {
      if (!(num % 2 === 0) && !(num % 3 === 0) && !(num % 7 === 0) && (num > 1) || (num === 2) || (num === 3) || (num === 5) || (num === 7)) {
        this.numerosPrimos.push(num);
      }
    }
  }
  saidaDosDados() {
    this.numerosPrimos.forEach((numero) => {
        console.log('');
        console.log('É primo: ' + numero);
    });
  }
}
