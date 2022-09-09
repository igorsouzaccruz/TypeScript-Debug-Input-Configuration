import { Questao } from "../heranca/questao";
import { IAlgoritimo } from "../interface/algoritimo";

export class QuestaoCinco extends Questao implements IAlgoritimo {
  //Dados passados para processamento - ENTRADA DO DADO
  b : number;
  a : number;
  //SAÍDA DO DADO
  somaDosNumerosPares : number = 0;
  numerosCompreendidos : number[] = [];

  constructor() {
    super("05");
  }

  entradaDeDados(): void {
    this.escreval(" Informe o valor de A:");
    this.a = Number(this.leia());
    this.escreval(" Informe o valor de B:");
    this.b = Number(this.leia());
  }
  processamentoDosDados() {
    if(this.b > this.a){
      for(let entreAeB : number = this.a; entreAeB <= this.b; entreAeB++){
        if(entreAeB % 2 === 0){
          let addParesCompreendidos = entreAeB;
          this.numerosCompreendidos.push(addParesCompreendidos);
          this.somaDosNumerosPares += Math.pow(entreAeB, 3)
        }
      }
    }
  }
  saidaDosDados() {
    if(this.a < this.b){
      this.escreval(`${this.somaDosNumerosPares}`);
      this.escreval(`${this.numerosCompreendidos}`)
    }else {
      this.escreval(" A é maior que B, logo, não pode ser processado.")
    }
  }
  
}
