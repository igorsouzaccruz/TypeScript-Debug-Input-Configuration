import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoDoze implements IAlgoritimo {
  prompt = PromptSync();


  titulo(): string {
    return 'QUESTÃO 12';
  }

  entradaDeDados(): void {

  }

  processamentoDosDados() {

  }
  saidaDosDados() {

  }
}
