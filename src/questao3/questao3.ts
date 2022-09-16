import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoTres implements IAlgoritimo {
  prompt = PromptSync()

  titulo(): string {
    return 'QUESTÃO 3'
  }

  entradaDeDados(): void {
    
  }

  processamentoDosDados() {

  }

  saidaDosDados() {

  }
}
