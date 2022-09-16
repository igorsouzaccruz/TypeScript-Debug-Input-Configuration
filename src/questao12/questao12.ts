import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoDoze implements IAlgoritimo {
  prompt = PromptSync();
  resultado: number = 0;

  titulo(): string {
    return 'QUESTÃO 12';
  }

  entradaDeDados(): void {
    console.log('Não precisa de interação com o usuário')
  }

  processamentoDosDados() {
    for (let denominador = 0; denominador < 36; denominador++) {
      this.resultado += ((37 - denominador) * (38 - denominador)) / (denominador + 1);
      return this.resultado
    }
  }
  saidaDosDados() {
    console.log(`O resultado da soma é: ${Number(this.resultado).toFixed(2)}`);
  }
}
