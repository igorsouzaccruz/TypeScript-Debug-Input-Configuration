import { VisualgBase } from '../abstract/visualg_base';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoUm extends VisualgBase implements IAlgoritimo {
  numero: number;
  resultado: string;

  entradaDeDados(): void {
    this.numero = this.leia('Informe um numero:');
  }

  processamentoDosDados() {
    const parOuImpar: string = this.numero % 2 === 0 ? 'é par' : 'é impar';
    const positivoOuNegativo = this.numero >= 0 ? 'é positivo' : 'é negativo';
    this.resultado = `O numero ${this.numero} ${parOuImpar} e ${positivoOuNegativo} `;
  }
  saidaDosDados() {
    this.escreval(this.resultado);
  }
}
