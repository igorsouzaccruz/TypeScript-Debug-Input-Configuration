import { VisualgBase } from '../abstract/visualg_base';
import { IAlgoritimo } from '../interface/algoritimo';

export class Tabuada extends VisualgBase implements IAlgoritimo {
  entrada: string = '';
  numero: number = undefined;
  saidaDoDado = '';

  entradaDeDados(): void {
    this.numero = this.leia(' Tabuada de 1 até ');
  }

  processamentoDosDados() {
    const qtdAgrupador = 3;
    let retorno =
      '   ________________________TABUADA____________________________\n';

    let numTabuada = 1;
    for (numTabuada; numTabuada <= this.numero; numTabuada += qtdAgrupador) {
      for (let numeroLinha = 1; numeroLinha <= 10; numeroLinha++) {
        for (let indexGrupo = 0; indexGrupo < qtdAgrupador; indexGrupo++) {
          const termo = numTabuada + indexGrupo;
          if (termo > this.numero) {
            retorno += this.gerarDivisor('');
            continue;
          }

          retorno += this.gerarDivisor(
            `${
              indexGrupo === 0 ? '  |' : ''
            } ${numeroLinha}${this.identarOperador(numeroLinha)}* ${termo} = ${
              termo * numeroLinha
            }`
          );
        }
        retorno += '\n';
      }

      retorno +=
        '  |___________________________________________________________|\n';
    }
    this.saidaDoDado = retorno;
  }

  identarOperador(numeroLinha: number): string {
    return numeroLinha < 10 ? '  ' : ' ';
  }

  saidaDosDados() {
    console.log(this.saidaDoDado);
  }

  private gerarDivisor(linha: string): string {
    const quantidadeDeEspacosVazios = 21 - linha.length - 1;
    for (let index = 0; index < quantidadeDeEspacosVazios; index++) {
      linha += ' ';
    }
    linha += '|';
    return linha;
  }
}
