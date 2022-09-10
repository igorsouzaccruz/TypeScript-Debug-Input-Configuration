import { Questao } from '../heranca/questao';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoDois extends Questao implements IAlgoritimo {
  private nota1: number;
  private nota2: number;
  private nota3: number;
  private media: number;
  private soma: number;

  // Saida do DADO  ---> Resultado
  constructor() {
    super('02');
  }
  entradaDeDados(): void {
    throw new Error('Method not implemented.');
  }
  processamentoDosDados() {
    throw new Error('Method not implemented.');
  }
  saidaDosDados() {
    console.log(this.numeroQuestao);
    if (this.foiRespondida) {
      this.escreval(this.media.toString());
      return;
    }
    this.escreval(' Não respondida!!!');
  }
}
