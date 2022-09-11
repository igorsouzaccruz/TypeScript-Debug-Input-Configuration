import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoCinco implements IAlgoritimo {
  prompt = PromptSync();
  numero_A: number = 0;
  numero_B: number = 0;
  somaDosCubos: number = 0;

  titulo(): string {
    return 'QUESTÃO 5';
  }
  entradaDeDados(): void {
    this.numero_A = Number(this.prompt(' Insira o número A: '));
    do {
      this.numero_B = Number(this.prompt(' Insira o número B (Onde B > A): '));
    } while (this.numero_B <= this.numero_A);
  }
  processamentoDosDados() {
    for (this.numero_A; this.numero_A < this.numero_B; this.numero_A++) {
      if (this.numero_A % 2 === 0) {
        this.somaDosCubos += Math.pow(this.numero_A, 3);
      }
    }
  }
  saidaDosDados() {
    console.log('Soma dos cubos dos números pares: ' + this.somaDosCubos);
  }
}
