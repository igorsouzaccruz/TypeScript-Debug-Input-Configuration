import { Questao } from '../heranca/questao';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoUm extends Questao implements IAlgoritimo {
  private numero: number;

  // Saida do DADO  ---> Resultado
  public resultados: string;

  constructor() {
    super('01');
  }

  entradaDeDados(): void {
    this.escreval(this.numeroQuestao);
    do {
      this.escreval(
        ' Informe um numero inteiro ou digite S para sair da questão'
      );
      this.resposta = this.leia();
      if (this.resposta.toUpperCase() == 'S') {
        break;
      }
    } while (this.resposta === '' || !Number.isInteger(Number(this.resposta)));

    if (Number.isInteger(Number(this.resposta))) {
      this.numero = Number(this.resposta);
      this.foiRespondida = true;
    }
  }
  processamentoDosDados() {
    if (this.foiRespondida) {
      const parOuImpar: string = this.isPar() ? 'par' : 'impar';
      const positivoOuNegativo: string = this.isPositive()
        ? 'positivo'
        : 'negativo';
      this.resultados = ` O numero ${this.numero} é ${parOuImpar} e é ${positivoOuNegativo}`;
    }
  }

  saidaDosDados() {
    console.log(this.numeroQuestao);
    if (this.foiRespondida) {
      this.escreval(this.resultados);
      return;
    }
    this.escreval(' Não respondida!!!');
  }

  private isPar(): boolean {
    return this.numero % 2 === 0;
  }

  private isPositive(): boolean {
    return this.numero >= 0;
  }
}
