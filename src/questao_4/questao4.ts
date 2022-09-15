import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoQuatro implements IAlgoritimo {
  prompt = PromptSync();

  numero : number;
  somaDosNumeros : number = 0;
  
  titulo(): string {
    return 'QUESTÃO 8';
  }

  entradaDeDados(): void {
    this.numero = Number(this.prompt(' Informe o número: '));
  }
  processamentoDosDados() {
    for(let i : number = 0; i < this.numero; i++){
      this.somaDosNumeros += i;
    }
  }
  saidaDosDados() {
    console.log(` A soma dos números inteiros é: ${this.somaDosNumeros}`);
    
  }
}
