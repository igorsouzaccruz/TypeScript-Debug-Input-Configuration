export class Fahrenheit {
  constructor(public temperatura: number) {}

  public toCelsius(): number {
    const celsius = (5 * (this.temperatura - 32)) / 9;
    return Number(celsius.toFixed(2));
  }
}
