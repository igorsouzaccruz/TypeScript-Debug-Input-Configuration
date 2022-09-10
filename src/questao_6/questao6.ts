import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';
import { Fahrenheit } from './fahrenheit';

export class QuestaoSeis implements IAlgoritimo {
  private prompt = PromptSync();
  private fahrenheit: Fahrenheit;
  private temperaturaCelsius: number;

  titulo(): string {
    return 'QUESTÃO 6';
  }

  entradaDeDados(): void {
    this.fahrenheit = new Fahrenheit(
      Number(this.prompt('Informe a temperatua em Fahrenheit: '))
    );
  }
  processamentoDosDados() {
    this.temperaturaCelsius = this.fahrenheit.toCelsius();
  }
  saidaDosDados() {
    console.log(
      `A temperatura em Fahrenheit é: ${this.fahrenheit.temperatura}`
    );
    console.log(`A mesma temperatura em Celsius: ${this.temperaturaCelsius}`);
  }
}
