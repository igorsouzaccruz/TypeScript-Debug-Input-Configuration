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
    let stringBuilder =
      '   ________________________TABUADA____________________________\n';

    let agrupador = 1;
    for (agrupador; agrupador <= this.numero; agrupador += qtdAgrupador) {
      for (let operador = 1; operador <= 10; operador++) {
        for (let indiceGrupo = 0; indiceGrupo < qtdAgrupador; indiceGrupo++) {
          const termo = agrupador + indiceGrupo;
          const chegouNoFim = termo > this.numero;
          if (chegouNoFim) {
            //Preenchendo com espaço vázio
            stringBuilder += this.gerarDivisor('');
            continue;
          }

          const ehInicioDaLinha = indiceGrupo === 0;
          let linha = '';
          if (ehInicioDaLinha) {
            linha += '  |';
          }
          linha += ` ${termo} * ${operador}${this.identar(operador)}= ${
            operador * termo
          }`;

          stringBuilder += this.gerarDivisor(linha);
        }
        stringBuilder += '\n';
      }

      stringBuilder +=
        '  |___________________________________________________________|\n';
    }
    this.saidaDoDado = stringBuilder;
  }

  saidaDosDados() {
    console.log(this.saidaDoDado);
  }

  identar(operador: number): string {
    return operador < 10 ? '  ' : ' ';
  }

  gerarDivisor(linha: string): string {
    const qtdCharPorLinha = 21;
    const tamanhoDaLinhaASerPreenchida = linha.length;
    const qtdDeCharReservado = 1;
    const qtdParaPreencher =
      qtdCharPorLinha - tamanhoDaLinhaASerPreenchida - qtdDeCharReservado;
    for (let indice = 0; indice < qtdParaPreencher; indice++) {
      linha += ' ';
    }
    linha += '|';
    return linha;
  }
}
