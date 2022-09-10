import { Questao } from '../heranca/questao';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoTres extends Questao implements IAlgoritimo {
  constructor() {
    super('03');
  }
  entradaDeDados(): void {
    throw new Error('Method not implemented.');
  }
  processamentoDosDados() {
    throw new Error('Method not implemented.');
  }
  saidaDosDados() {
    throw new Error('Method not implemented.');
  }
}
