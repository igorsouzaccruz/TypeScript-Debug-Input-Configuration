import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoDois implements IAlgoritimo {
  prompt = PromptSync();
  notas:number[] = [];
  resultado:string = '';

  titulo(): string {
    return 'QUESTÃO 02'
    
  }
  entradaDeDados(): void {
    let qtdDeNotas = Number(this.prompt('Quantas notas deseja fazer a média? '));
    let nota:number;
    for (let indexDaNota = 0; indexDaNota < qtdDeNotas ; indexDaNota++) {
       nota = Number(this.prompt('Digite uma nota? '));
       this.notas.push(nota)
    }
  }
  processamentoDosDados() {
    let somaDasNotas:number = 0;
    let mediaDasNotas:number = 0;
    for (let indexDaNota = 0; indexDaNota < this.notas.length; indexDaNota++) {
      somaDasNotas += this.notas[indexDaNota];
    }
    mediaDasNotas = somaDasNotas/this.notas.length;
    if (mediaDasNotas >= 7.0) {
        this.resultado = 'Aprovado'
        if (mediaDasNotas === 10) {
            this.resultado += ' Com Louvor'
        }
    }else {
        this.resultado = 'Reprovado'
    }
  }
  saidaDosDados() {
    console.log(`O aluno foi : ${this.resultado}!`);
  }
}
