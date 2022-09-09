import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoDois extends Questao implements IAlgoritimo {

  nota1 : number = 0;
  nota2 : number = 0;
  nota3 : number = 0;
  media : number = 0;
  numeroDeNota : number[] = [this.nota1, this.nota2, this.nota3];

  constructor() {
    super('02');
}
  entradaDeDados(): void {
    this.escreval(' Informe a primeira nota: ');
    this.nota1 = Number(this.leia());
    this.escreval(' Informe a segunda nota: ');
    this.nota2 = Number(this.leia());
    this.escreval(' Informe a terceira nota: ');
    this.nota3 = Number(this.leia());
  }
  processamentoDosDados() {
    const somaDasNotas : number = this.nota1 + this.nota2 + this.nota3;
    this.media = somaDasNotas / this.numeroDeNota.length;
    if(this.media === 10){
      this.resposta = "APROVADO COM LOUVOR!";
    }
    else if(this.media >= 7){
      this.resposta = "APROVADO!";
    }
    else{
      this.resposta = "REPROVADO";
    }
  }
  saidaDosDados() {
    this.escreval(this.resposta);
  }

}
