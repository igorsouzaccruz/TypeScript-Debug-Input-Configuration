# Configurando

- Utilizar versão do node 16.16.0
- Entrar na pasta e rodar o commando abaixo:

  ```
      npm i
  ```

- Projeto está pronto para desenvolvimento.

# Criando os algoritimos.

- Dentro da pasta **src** crie uma pasta como o _nome do arquivo_
  ```
    mkdir src/[nome_da_pasta]
  ```
- Dentro da pasta criei o arquivo **.ts**

  ```
      type nul > src/[nome_da_pasta]/[nome_do_arquivo].ts
  ```

  - O arquivo **.ts** deve ser criado com o contéudo abaixo:

    ```js
    export class NomeArquivo implements IAlgoritimo {
      entradaDeDados(): void {
        throw new Error('Method not implemented.');
      }
      processamentoDosDados() {
        throw new Error('Method not implemented.');
      }
      saidaDosDados() {
        throw new Error('Method not implemented.');
      }
    }
    ```

  - **Então desenvolva seu algoritimo**.

# Para executar/debugar.

- abra o arquivo main.ts localizado na raiz do seu projeto. O modelo **cru** deve estar como abaixo:

  ```js
  import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
  import { IAlgoritimo } from './interface/algoritimo';

  const algoritimos: Array<IAlgoritimo> = [];

  const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
    new GerenciadorDeAlgoritimo(algoritimos);

  gerenciadorDosAlgoritimos.executar();
  ```

- para cada _novo algoritimo criado_ adicione-o no Array de algoritimos. Exemplo abaixo:

  - const algoritimos: Array<IAlgoritimo> = [**new NomeArquivoCriado(), new Nome2ArquivoCriado(), new Nome3ArquivoCriado()**];

  ```js
  import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
  import { IAlgoritimo } from './interface/algoritimo';

  const algoritimos: Array<IAlgoritimo> = [
    new NomeArquivoCriado(),
    new Nome2ArquivoCriado(),
    new Nome3ArquivoCriado(),
  ];

  const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
    new GerenciadorDeAlgoritimo(algoritimos);

  gerenciadorDosAlgoritimos.executar();
  ```

- E com o arquivo **main.ts** aberto execute o f5 no vsCode.
