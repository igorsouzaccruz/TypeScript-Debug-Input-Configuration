import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoTres extends Questao implements IAlgoritimo {
  idades : number[] = [];
  maiorIdade : number[] = [];
  menorIdade : number[] = [];
  totalidade : number = 0;

  entradaDeDados(): void {
    this.escreval(" Escreva as idades: ");
    this.idades[0] = Number(this.leia());

    for(let i : number = 0; i < this.idades.length; i++){
      
    }
  }
  processamentoDosDados() {
    throw new Error("Method not implemented.");
  }
  saidaDosDados() {
    throw new Error("Method not implemented.");
  }
}
