import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoTreze implements IAlgoritimo {
  prompt = PromptSync();
 

  titulo(): string {
    return 'QUESTÃO 12';
  }

  entradaDeDados(): void {
    console.log('Não precisa de interação com o usuário')
  }

  processamentoDosDados() {

  }
  saidaDosDados() {
  
  }
}
