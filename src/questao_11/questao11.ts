import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoOnze implements IAlgoritimo {
  prompt = PromptSync();
  numeroTabuada: number = 0;
  resultado: string = '';

  titulo(): string {
    return 'QUESTÃO 11';
  }
  entradaDeDados(): void {
    this.numeroTabuada = Number(
      this.prompt('Até qual número deseja a tabuada? ')
    );
  }
  processamentoDosDados() {
    for (let multiplicador = 1; multiplicador <= this.numeroTabuada; multiplicador++) {
      for (let linha = 1; linha <= 10; linha++) {
        this.resultado += `|  ${multiplicador} * ${linha} = ${linha * multiplicador}`;
        this.resultado += `\n`;
        if (linha === 10) {
          this.resultado += `---------------- \n`;
        }
      }
    }
  }
  saidaDosDados() {
    console.log(this.resultado);
  }
}
