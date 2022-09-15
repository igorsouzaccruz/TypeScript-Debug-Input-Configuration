import { IAlgoritimo } from '../interface/algoritimo';

import PromptSync from 'prompt-sync';

export class QuestaoUm implements IAlgoritimo {
  prompt = PromptSync();

  numero : number = 0;
  resultadoUm : string;

  constructor() {}

  titulo(): string {
    return 'QUESTÃO 1';
  }

  entradaDeDados(): void {
    this.numero = Number(this.prompt(" Informe um número: "));
  }
  processamentoDosDados() {
    if(this.numero % 2 == 0) {
    this.resultadoUm = " Número é par";
  }else {
    this.resultadoUm = " Número é ímpar";
  }
  if(this.numero >= 0) {
    this.resultadoUm += " e positivo!";
  }else{
    this.resultadoUm += " e negativo!";
  }
  }
  saidaDosDados() {
    console.log(this.resultadoUm);
  }
}
