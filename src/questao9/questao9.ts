import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoNove implements IAlgoritimo {
  prompt = PromptSync();
  resultado: number = 1000;

  titulo(): string {
    return 'QUESTÃO 9';
  }

  entradaDeDados(): void {
   console.log('Não precisa de interação com o usuário');
  }

  processamentoDosDados() {
    let numero: number;
    for (let denominador = 0; denominador < 50; denominador++) {
      numero = (1000 - (denominador * 3)) / (denominador + 1);
      denominador % 2 === 0 ? this.resultado += numero :
      this.resultado -= numero;
    }
  }
  saidaDosDados() {
    console.log(`O resultado da soma é: ${Number(this.resultado).toFixed(2)}`);
  }
}
