import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoCinco implements IAlgoritimo {
  prompt = PromptSync()
  private somaNumeros: number = 0

  titulo(): string {
    return 'QUESTÃO 5'
  }

  entradaDeDados(): void {

  }

  processamentoDosDados() {

  }

  saidaDosDados() {

  }
}
