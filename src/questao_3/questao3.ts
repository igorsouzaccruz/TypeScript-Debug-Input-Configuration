import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoTres extends Questao implements IAlgoritimo {
  idades : number[] = [];
  maiorIdade : number = 0;
  menorIdade : number = 0;
  totalIdade : number = 0;
  media : number = 0;
  
  constructor() {
    super("03");
  }

  entradaDeDados(): void {
    this.escreval(" Escreva a quantidade de idades: ");
    this.totalIdade = Number(this.leia());

    for(let i : number = 0; i < this.totalIdade; i++){
      this.escreval(` Informe a idade ${i + 1}: `);
      this.idades.push(Number(this.leia()));
    }
  }
  processamentoDosDados() {
    let somaDasIdades : number = 0;
    for(let i : number = 0; i < this.idades.length; i++){
      if(this.idades[i] > this.maiorIdade){
        this.maiorIdade = this.idades[i];
      }
      if(this.idades[i] < this.menorIdade){
        this.menorIdade = this.idades[i];
      }
      somaDasIdades  += this.idades[i];
    }
    this.media = somaDasIdades / this.totalIdade;
  }
  saidaDosDados() {
    this.escreval(`A média das idades é: ${this.media}`);
    this.escreval(`A maior idade é: ${this.maiorIdade}`);
    this.escreval(`A menor idade é: ${this.menorIdade}`);
  }
}
