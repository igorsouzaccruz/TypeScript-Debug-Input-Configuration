import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoDez implements IAlgoritimo {
  prompt = PromptSync()
  anacleto: number = 1.50;
  felisberto: number = 1.10;
  quantidadeAnos:number = 0;

  titulo(): string {
    return 'QUESTÃO 10'
  }

  entradaDeDados(): void {
    console.log('Não precisa de interação com o usuário')
  }

  processamentoDosDados() {
    do {
      this.anacleto += 0.02;
      this.felisberto += 0.03;
      this.quantidadeAnos++;
    } while (this.anacleto > this.felisberto);
  }
  saidaDosDados() {
    console.log(`Será necessário ${this.quantidadeAnos} anos para Felisberto ser maior que Anacleto `)
  }
}
