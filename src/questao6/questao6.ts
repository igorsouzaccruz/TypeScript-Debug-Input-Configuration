import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoSeis implements IAlgoritimo {
  prompt = PromptSync()
 

  titulo(): string {
    return 'QUESTÃO 6'
  }

  entradaDeDados(): void {
  
  }

  processamentoDosDados() {

  }

  saidaDosDados() {

  }
}
