import { IAlgoritimo } from '../interface/algoritimo';
// Faça um algoritmo que lê uma temperatura em Fahrenheit e calcula a temperatura correspondente em Celsius. Ao final o programa deve exibir as duas temperaturas. – Usar a fórmula: C = (5 * (F-32) / 9)

export class QuestaoSeis implements IAlgoritimo {
  //ENTRADA DO DADO
  constructor(private tempFahrenheit: number) {}

  entradaDeDados(): void {
    throw new Error('Method not implemented.');
  }
  processamentoDosDados() {
    throw new Error('Method not implemented.');
  }
  saidaDosDados() {
    throw new Error('Method not implemented.');
  }

  // SAIDA DE DADOS
  public mostrarResultado(): void {
    console.log('- QUESTÃO 06');
    console.log(`O temperatura em Fahrenheit é: ${this.tempFahrenheit}`);
    console.log(
      `A mesma temperatura em Celsius: ${this.fahrenheitToCelsius()}`
    );
  }

  // PROCESSAMENTO DO DADO
  private fahrenheitToCelsius(): number {
    let celsius: number = 0;
    celsius = (5 * (this.tempFahrenheit - 32)) / 9;
    return Number(celsius.toFixed(2));
  }
}
