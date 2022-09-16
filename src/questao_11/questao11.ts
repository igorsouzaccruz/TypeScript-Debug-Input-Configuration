import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoOnze implements IAlgoritimo {
  prompt = PromptSync();

  numero: number = 1;
  termo: number;

  titulo(): string {
    return 'QUESTÃO 11';
  }

  entradaDeDados(): void {
    this.numero = Number(this.prompt(' Informe o número da tabuada: '));
    this.termo = Number(
      this.prompt(' Informe o número de termos da tabuada: ')
    );
  }
  processamentoDosDados() {
    for (let cont: number = 0; cont <= this.termo; cont++) {
      console.log(` ${cont} + ${this.numero} = ${cont + this.numero}`);
    }
    console.log('------------------------------------------------------');

    for (let cont: number = 1; cont <= this.termo; cont++) {
      console.log(` ${cont} - ${this.numero} = ${cont - this.numero}`);
    }
    console.log('------------------------------------------------------');
    for (let cont: number = 1; cont <= this.termo; cont++) {
      console.log(` ${cont} * ${this.numero} = ${cont * this.numero}`);
    }
    console.log('------------------------------------------------------');
    for (let cont: number = 1; cont <= this.termo; cont++) {
      console.log(` ${cont} / ${this.numero} = ${cont / this.numero}`);
    }
  }
  saidaDosDados() {}
}
