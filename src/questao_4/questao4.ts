import { Questao } from '../heranca/questao';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoQuatro extends Questao implements IAlgoritimo {
  private somaDosNumerosDe1A100: number = 0;
  // Saida do DADO  ---> Resultado
  public resultados: string;

  constructor() {
    super('04');
  }

  entradaDeDados(): void {
    this.escreval('');
    this.escreval('- QUESTÃO 04');
    this.escreval(' Não necessita de entrada de dados.');
    this.escreval(' Deve calcular a soma dos inteiros dos numeros de 1 a 100');
    this.foiRespondida = true;
  }
  processamentoDosDados() {
    for (let index = 0; index < 100; index++) {
      const numeroNoLaco = index + 1;
      this.somaDosNumerosDe1A100 += numeroNoLaco;
    }
    this.resultados = ` A soma dos numero inteiros de 1 a 100 é ${this.somaDosNumerosDe1A100}`;
  }

  saidaDosDados() {
    console.log(this.numeroQuestao);
    if (this.foiRespondida) {
      console.log(this.resultados);
      return;
    }
    this.escreval('  Não respondida!!!');
  }
}
