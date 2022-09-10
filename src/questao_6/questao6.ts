import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoSeis implements IAlgoritimo {
  prompt = PromptSync();
  fahrenheit: number;
  celsius: number;

  titulo(): string {
    return 'QUESTÃO 6';
  }

  entradaDeDados(): void {
    this.fahrenheit = Number(
      this.prompt(' Informe a temperatura em Fahrenheit: ')
    );
  }
  processamentoDosDados() {
    this.celsius = (5 * (this.fahrenheit - 32)) / 9;
  }
  saidaDosDados() {
    console.log(` Temperatura em Fahrenheit: ${this.fahrenheit}°F`);
    console.log(` Temperatura em Celsius: ${this.celsius.toFixed(2)}°C`);
  }
}
