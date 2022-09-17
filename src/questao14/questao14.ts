import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
export class QuestaoQuatorze implements IAlgoritimo {
  prompt = PromptSync();
  altura: number;
  alturas: number[] = [];
  sexo: string
  numeroPessoas: number = 0
  mediaAlturaMulheres: number = 0;
  somaAlturaMulheres: number = 0;
  numeroMulheres: number = 0;
  numeroHomens: number = 0;
  maiorAltura: number = 0;
  menorAltura: number = 0;
  porcentagemHomem: number = 0;
  porcentagemMulher: number = 0;

  titulo(): string {
    return 'QUESTÃO 14';
  }

  entradaDeDados(): void {
    this.numeroPessoas = Number(this.prompt('Quantidade de pessoas é: '))

    for (let pessoas = 0; pessoas < this.numeroPessoas; pessoas++) {
      this.altura = Number(this.prompt('Qual a altura da pessoa: '))
      this.alturas.push(this.altura)
      this.sexo = this.prompt(
        'Qual sexo? utilize (f) para feminino e (m) para masculino: '
      ).toLocaleLowerCase()
      if (this.sexo === 'f') {
        this.somaAlturaMulheres += this.altura
        this.numeroMulheres++
      } else {
        this.numeroHomens++
      }
    }
  }

  processamentoDosDados() {
  this.maiorAltura = this.alturas[0]
  this.menorAltura = this.alturas[0]

  this.alturas.forEach(altura => {
    if (this.maiorAltura < altura) {
      this.maiorAltura = altura
    }
    if (this.menorAltura > altura) {
      this.menorAltura = altura
    }
  })
  this.mediaAlturaMulheres =
  this.somaAlturaMulheres / this.numeroMulheres
  this.porcentagemHomem = (this.numeroHomens / this.numeroPessoas) * 100
  this.porcentagemMulher =
    (this.numeroMulheres / this.numeroPessoas) * 100
  }
  saidaDosDados() {
    console.log('Maior altura do grupo: ' + this.maiorAltura.toFixed(2))
    console.log('Menor altura do grupo: ' + this.menorAltura.toFixed(2))
    console.log(
      'Media altura das mulheres: ' + this.mediaAlturaMulheres.toFixed(2)
    )
    console.log('Número de mulheres: ' + this.numeroMulheres)
    console.log('Número de homens: ' + this.numeroHomens)
    console.log('Porcentagem de homens:' + this.porcentagemHomem + ' %')
    console.log('Porcentagem de mulheres:' + this.porcentagemMulher + ' %')
  }
}
