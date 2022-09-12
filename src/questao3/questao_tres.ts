import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
import { GerenciadorIdades } from './gerenciador_idades';
export class Questao3 implements IAlgoritimo {
  prompt = PromptSync();
  idades: Array<number> = [];
  mediaIdade: number;
  maiorIdade: number;
  menorIdade: number;

  titulo(): string {
    return 'Questao 3';
  }

  entradaDeDados(): void {
    let valorInformado: string = '';
    do {
      valorInformado = this.prompt('Informe a idade: ');
      // Adicionando todas as entradas de dados... As IDADES
      const idadeInformada = Number(valorInformado);
      if (idadeInformada > 0) {
        this.idades.push(Number(valorInformado));
      }
    } while (valorInformado !== '0');
  }

  processamentoDosDados() {
    const gerenciadorDeIdades = new GerenciadorIdades(this.idades);
    this.mediaIdade = gerenciadorDeIdades.media();
    this.menorIdade = gerenciadorDeIdades.menor();
    this.maiorIdade = gerenciadorDeIdades.maior();
  }

  saidaDosDados() {
    console.log(`A média das idades é: ${this.mediaIdade}`);
    console.log(`A maior idade é: ${this.maiorIdade}`);
    console.log(`A menor idade é: ${this.menorIdade}`);
  }
}
