import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoQuatro implements IAlgoritimo {
  prompt = PromptSync()
  private somaNumeros: number = 0

  titulo(): string {
    return 'QUESTÃO 4'
  }

  entradaDeDados(): void {
    console.log('Não precisa de interação com o usuário')
  }

  processamentoDosDados() {
    for (let numero = 0; numero < 100; numero++) {
      this.somaNumeros += numero + 1
    }
  }

  saidaDosDados() {
    console.log(`A soma dos números inteiros de 1 á 100 é: ${this.somaNumeros}`)
  }
}
