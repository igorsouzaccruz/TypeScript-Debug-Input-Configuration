import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoSete extends Questao implements IAlgoritimo {
  
  votoCandidatoUm : number = 0;
  votoCandidatoDois : number = 0;
  votoCandidatoTres : number = 0;
  qtdEleitores : number;
  votos : number[] = [];
  
  constructor() {
    super("07");
  }
  entradaDeDados(): void {
    this.escreval(" Informe a quantidade de eleitores: ");
    this.qtdEleitores = Number(this.leia());

    for(let index : number = 0; index < this.qtdEleitores; index++){
      this.escreval(" Informe o número do candidato: ");
      this.votos.push(Number(this.leia()));
    }
  }
  processamentoDosDados() {
    for(let index : number = 0; index < this.votos.length; index++){
      if(this.votos[index] === 1){
        this.votoCandidatoUm++
      }
      if(this.votos[index] === 2){
        this.votoCandidatoDois++
      }
      if(this.votos[index] === 3){
        this.votoCandidatoTres++
      }
    }
  }
  saidaDosDados() {
    const votoNaoNulo : number = this.votoCandidatoUm + this.votoCandidatoDois + this.votoCandidatoTres;
    const votoNulo : number = this.qtdEleitores - votoNaoNulo;
    this.escreval(`Número de votantes: ${this.qtdEleitores}`);
    this.escreval(`Candidato 1 recebeu: ${this.votoCandidatoUm} de voto(s)`);
    this.escreval(`Candidato 2 recebeu: ${this.votoCandidatoDois} de voto(s)`);
    this.escreval(`Candidato 3 recebeu: ${this.votoCandidatoTres} de voto(s)`);
    this.escreval(`Total de voto(s): ${votoNaoNulo}`);
    this.escreval(`Total de voto(s) nulos: ${votoNulo}`);
  }
}