import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
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
    const ladoAIgualLadoB = this.trianguloLadoA === this.trianguloLadoB;
    const ladoAIgualLadoC = this.trianguloLadoA === this.trianguloLadoC;
    const ladoBIgualLadoC = this.trianguloLadoB === this.trianguloLadoC;
    const todosOsLadosIguais = ladoAIgualLadoB && ladoAIgualLadoC;

    if (todosOsLadosIguais) {
      this.resultado = `Triângulo Equilátero!`;
      return;
    }

    if (ladoAIgualLadoB || ladoAIgualLadoC || ladoBIgualLadoC) {
      this.resultado = `Triângulo Isósceles!`;
      return;
    }

    this.resultado = `Triângulo Escaleno!`;
  }

  saidaDosDados() {
    console.log(this.resultado);
  }
}
