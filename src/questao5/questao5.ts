import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoCinco implements IAlgoritimo {
  prompt = PromptSync()
  numeroA: number = 0
  numeroB: number = 0
  somaCubos: number = 0

  titulo(): string {
    return 'QUESTÃO 5'
  }

  entradaDeDados(): void {
    this.numeroA = Number(this.prompt('Digite o número A '));
    do {
      this.numeroB = Number(this.prompt('Digite o número B (o valor de B precisa ser maior que A): '));
    } while (this.numeroB < this.numeroA);
  }

  processamentoDosDados() {
    for (this.numeroA; this.numeroA < this.numeroB; this.numeroA++) {
      if(this.numeroA % 2 === 0) {
        this.somaCubos += Math.pow(this.numeroA, 3);
      }
    }
  }

  saidaDosDados() {
    console.log(`Soma dos cubos dos números pares é ${this.somaCubos}`)
  }
}
