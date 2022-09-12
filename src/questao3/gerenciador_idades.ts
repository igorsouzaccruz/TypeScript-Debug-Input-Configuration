export class GerenciadorIdades {
  private _media: number = 0;
  private _maior: number = 0;
  private _menor: number;
  constructor(private idades: Array<number>) {
    let somaIdade: number = 0;
    idades.forEach((idade) => {
      somaIdade += idade;

      if (this._maior < idade) {
        this._maior = idade;
      }

      if (!this._menor) {
        this._menor = idade;
      }
      if (this._menor > idade) {
        this._menor = idade;
      }
    });

    this._media = somaIdade / this.idades.length;
  }

  public media(): number {
    return this._media;
  }

  public maior(): number {
    return this._maior;
  }

  public menor(): number {
    return this._menor;
  }
}
