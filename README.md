# TypeScript-Debug-Input-Configuration
All steps to install TypeScript with debug and a prompt-sync for a input values.

- criar pasta, entrar nela e abri um terminal
    - executar o npm i typescript@4.7.4 ts-node@10.9.1 prompt-sync@4.2.0 @types/prompt-sync@4.1.1 --save
    - executar o npm i -g npx (se ainda não existir)
- Criar o arquivo tsconfig.json    com esse conteudo abaixo
{
  "compilerOptions": {
        "target": "es2017",
        "module": "commonjs",
        "outDir": "./dist",
        "sourceMap": true,
        "allowSyntheticDefaultImports": true
    },
    "exclude": [
        "dist",
        "node_modules"
    ]
}

dependencias:
{
  "dependencies": {
    "@types/prompt-sync": "4.1.1",
    "prompt-sync": "4.2.0",
    "ts-node": "10.9.1",
    "typescript": "4.7.4"
  }
}

- Criar uma pasta dentro do projeto chamada ".vscode" e dentro dela colocar criar um arquivo chamado "launch.json" o conteudo abaixo:
{
    // Use o IntelliSense para saber mais sobre os atributos possíveis.
    // Focalizar para exibir as descrições dos atributos existentes.
    // Para obter mais informações, acesse: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "ts-node",
            "type": "node",
            "request": "launch",
            "args": [
                "${relativeFile}"
            ],
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector",
            "internalConsoleOptions": "openOnSessionStart",
            "console": "externalTerminal"
        }
    ]
}

- Criar um arquivo de exemplo com o conteudo abaixo (SE QUISER):
    const promptSync = require("prompt-sync");
    const prompter = promptSync();

    const text: string = prompter("Diz aqui qualquer coisa: ");

    console.log('AAAAAAAAAAAA');
    console.log(text);

- Para executar/debugar 
    - npx ts-node {nomeDoArquivo.ts} (editado)
