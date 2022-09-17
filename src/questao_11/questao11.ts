import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoOnze implements IAlgoritimo {
  prompt = PromptSync();

  termo: number;
  processamento: string = '';

  titulo(): string {
    return 'QUESTÃO 11';
  }

  entradaDeDados(): void {
    this.termo = Number(this.prompt(' Informe o número de termo(s): '));
  }
  processamentoDosDados() {
    for (let contador: number = 1; contador <= this.termo; contador++) {
      this.processamento += ` ${this.termo} * ${contador} = ${
        this.termo * contador
      }\n`;
    }
  }

  saidaDosDados() {
    console.log(this.processamento);
  }
}
