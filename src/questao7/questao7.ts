import PromptSync from 'prompt-sync'
import { IAlgoritimo } from '../interface/algoritimo'
export class QuestaoSete implements IAlgoritimo {
  prompt = PromptSync()


  titulo(): string {
    return 'QUESTÃO 7'
  }

  entradaDeDados(): void {
    
  }

  processamentoDosDados() {

  }

  saidaDosDados() {
 
  }
}
