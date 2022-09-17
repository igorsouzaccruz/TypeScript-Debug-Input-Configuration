import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoTreze implements IAlgoritimo {
  prompt = PromptSync();
  ladoA: number;
  ladoB: number;
  ladoC: number;
  resultado: string = '';

  titulo(): string {
    return 'QUESTÃO 12';
  }

  entradaDeDados(): void {
    let triangulo: boolean = false;
    while (triangulo === false) {
      this.ladoA = Number(this.prompt('Escreva o primeiro lado do triângulo '));
      this.ladoB = Number(this.prompt('Escreva o segundo lado do triângulo '));
      this.ladoC = Number(this.prompt('Escreva o terceiro lado do triângulo '));
      if(
        this.ladoA < this.ladoB + this.ladoC &&
        this.ladoB < this.ladoA + this.ladoC &&
        this.ladoC < this.ladoB + this.ladoA
        ) {
          triangulo = true;
        }
    }
  }

  processamentoDosDados() {
    if((this.ladoA === this.ladoB) && (this.ladoB === this.ladoC)) {
      this.resultado = `Triângulo Equilátero`;
    }
    if (
      (this.ladoA === this.ladoB && this.ladoB != this.ladoC)||
      (this.ladoC === this.ladoB &&  this.ladoB != this.ladoA)||
      (this.ladoC === this.ladoA && this.ladoA != this.ladoB) 
    ) {
      this.resultado = `Triângulo Isóceles`;
    }
    if (this.ladoA != this.ladoB && this.ladoB != this.ladoC && this.ladoC != this.ladoA) {
      this.resultado = `Triângulo Escaleno`;
    }
  }
  saidaDosDados() {
    console.log(this.resultado)
  }
}
