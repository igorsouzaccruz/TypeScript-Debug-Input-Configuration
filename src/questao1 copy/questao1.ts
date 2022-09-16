import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoQuatro implements IAlgoritimo {
  prompt = PromptSync()

  titulo(): string {
    return 'QUESTÃO 4'
  }

  entradaDeDados(): void {
    
  }

  processamentoDosDados() {

  }


  saidaDosDados() {

  }
}
