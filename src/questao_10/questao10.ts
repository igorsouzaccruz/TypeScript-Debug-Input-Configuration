import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoDez implements IAlgoritimo {
  prompt = PromptSync();
  anacleto: number = 1.50;
  felisberto:number = 1.10;
  anos:number = 0;

  titulo(): string {
    return 'QUESTÃO 10';
  }
  entradaDeDados(): void {
    console.log('Não necessita entrada de dados');
  }
  processamentoDosDados() {
    do {
        this.anacleto += 0.02;
        this.felisberto += 0.03;
        this.anos++;
        
    } while (this.anacleto > this.felisberto);
  }
  saidaDosDados() {
    console.log (`Serão necessários ${this.anos} anos para Felisberto ser maior que Anacleto`);
  }
}
