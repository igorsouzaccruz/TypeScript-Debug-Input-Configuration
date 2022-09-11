import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoTreze implements IAlgoritimo {
  prompt = PromptSync();
  trianguloLadoA: number;
  trianguloLadoB: number;
  trianguloLadoC: number;
  resultado: string = '';

  titulo(): string {
    return 'QUESTÃO 13';
  }
  entradaDeDados(): void {
    let trianguloVerdadeiro: Boolean = false;
    while (trianguloVerdadeiro === false) {
      this.trianguloLadoA = Number(
        this.prompt(' Escreva o primeiro lado do triângulo: ')
      );
      this.trianguloLadoB = Number(
        this.prompt(' Escreva o segundo lado do triângulo: ')
      );
      this.trianguloLadoC = Number(
        this.prompt(' Escreva o terceiro lado do triângulo: ')
      );
      if (
        this.trianguloLadoA < this.trianguloLadoB + this.trianguloLadoC &&
        this.trianguloLadoB < this.trianguloLadoA + this.trianguloLadoC &&
        this.trianguloLadoC < this.trianguloLadoB + this.trianguloLadoA
      ) {
        trianguloVerdadeiro = true;
      }
    }
  }
  processamentoDosDados() {
   if ((this.trianguloLadoA === this.trianguloLadoB) && (this.trianguloLadoB === this.trianguloLadoC)) {
    this.resultado = `Triângulo Equilátero!`;
   }
   if (
     (this.trianguloLadoA === this.trianguloLadoB &&
       this.trianguloLadoB != this.trianguloLadoC) ||
     (this.trianguloLadoC === this.trianguloLadoB &&
       this.trianguloLadoB != this.trianguloLadoA) ||
       (this.trianguloLadoC === this.trianguloLadoA &&
         this.trianguloLadoA != this.trianguloLadoB)
   ) {
     this.resultado = `Triângulo Isósceles!`;
   }
   if (this.trianguloLadoA != this.trianguloLadoB && this.trianguloLadoB != this.trianguloLadoC && this.trianguloLadoC != this.trianguloLadoA) {
     this.resultado = `Triângulo Escaleno!`;
   }
  }
  saidaDosDados() {
    console.log(this.resultado);
    
  }
}
