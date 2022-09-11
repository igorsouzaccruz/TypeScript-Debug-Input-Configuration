import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoQuatro implements IAlgoritimo {
  private somaDosNumerosDe1A100: number = 0;

  titulo(): string {
    return 'QUESTÃO 4';
  }
  entradaDeDados(): void {
    console.log(' Não necessita de entrada de dados');    
  }
  processamentoDosDados() {
     for (let index = 0; index < 100; index++) {
       const numeroNoLaco = index + 1;
       this.somaDosNumerosDe1A100 += numeroNoLaco;
     }
  }
  saidaDosDados() {
    console.log(` A soma dos numero inteiros de 1 a 100 é: ${this.somaDosNumerosDe1A100}`);
  }
}
