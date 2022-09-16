import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoOito implements IAlgoritimo {
  prompt = PromptSync();

  titulo(): string {
    return 'QUESTÃO 8';
  }

  entradaDeDados(): void {
    
  }

  processamentoDosDados() {
  
  }
  saidaDosDados() {
 
  }
}
