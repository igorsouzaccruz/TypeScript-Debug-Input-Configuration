import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoOnze implements IAlgoritimo {
  prompt = PromptSync();
  tabuada: number = 0;
  

  titulo(): string {
    return 'QUESTÃO 11';
  }

  entradaDeDados(): void {
    this.tabuada = Number(this.prompt('Até tabuada de: '));
  }

  processamentoDosDados() {
    for (let numero = 1; numero <= this.tabuada; numero++) {
      console.log(1, 'x', numero, '=', numero * 1 )
      console.log(2, 'x', numero, '=', numero * 2 )
      console.log(3, 'x', numero, '=', numero * 3 )
      console.log(4, 'x', numero, '=', numero * 4 )
      console.log(5, 'x', numero, '=', numero * 5 )
      console.log(6, 'x', numero, '=', numero * 6 )
      console.log(7, 'x', numero, '=', numero * 7 )
      console.log(8, 'x', numero, '=', numero * 8 )
      console.log(9, 'x', numero, '=', numero * 9 )
      console.log(10, 'x', numero, '=', numero * 10 )
      console.log('')
    }
  }
  saidaDosDados() {
    console.log(this.tabuada)
  }
}
