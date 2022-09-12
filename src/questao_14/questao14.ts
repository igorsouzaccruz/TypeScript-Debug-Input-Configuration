import { IAlgoritimo } from '../interface/algoritimo';
import PromptSync from 'prompt-sync';
export class QuestaoQuatorze implements IAlgoritimo {
  prompt = PromptSync();
  altura: number;
  alturas: number[] = [];
  sexo: string;
  numeroPessoas:number = 0;
  mediaAlturaMulheres: number = 0;
  somaAlturaMulheres: number = 0;
  numeroDeMulheres: number = 0;
  numeroDeHomens: number = 0;
  maiorAltura: number = 0;
  menorAltura: number = 0;
  porcentagemHomem: number = 0;
  porcentagemMulher:number = 0;

  titulo(): string {
    return 'QUESTÃO 14';
  }
  entradaDeDados(): void {
    this.numeroPessoas = Number(
      this.prompt('Quantas pessoas para amostragem? ')
    );

    for (let index = 0; index < this.numeroPessoas; index++) {
      this.altura = Number(this.prompt(' Qual a altura da pessoa? '));
      this.alturas.push(this.altura);
      this.sexo = this.prompt('Qual sexo? Utilize (f) para feminino e (m) para masculino: ').toLowerCase();
      if (this.sexo === 'f') {
        this.somaAlturaMulheres += this.altura;
        this.numeroDeMulheres++;
      } else {
        this.numeroDeHomens++;
      }
    }
  }
  processamentoDosDados() {
    this.maiorAltura = this.alturas[0];
    this.menorAltura = this.alturas[0];

    this.alturas.forEach((altura) => {
      if (this.maiorAltura < altura) {
        this.maiorAltura = altura;
      }
      if (this.menorAltura > altura) {
        this.menorAltura = altura;
      }
    });
    this.mediaAlturaMulheres = this.somaAlturaMulheres/ this.numeroDeMulheres;
    this.porcentagemHomem = (this.numeroDeHomens/this.numeroPessoas) * 100;
    this.porcentagemMulher = (this.numeroDeMulheres / this.numeroPessoas) * 100;
    }
  saidaDosDados() {
    console.log("Maior altura do grupo: " + this.maiorAltura.toFixed(2));
    console.log("Menor altura do grupo: " + this.menorAltura.toFixed(2));
    console.log("Media altura das mulheres: " + this.mediaAlturaMulheres.toFixed(2));
    console.log("Número de mulheres: " + this.numeroDeMulheres);
    console.log("Número de homens: " + this.numeroDeHomens);
    console.log("Porcentagem de homens:" + this.porcentagemHomem + " %");
    console.log("Porcentagem de mulheres:" + this.porcentagemMulher + " %");
  }
}
