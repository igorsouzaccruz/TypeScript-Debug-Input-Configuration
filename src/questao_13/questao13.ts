import PromptSync from 'prompt-sync';
import { IAlgoritimo } from '../interface/algoritimo';

export class QuestaoTreze implements IAlgoritimo {
  prompt = PromptSync();

  n1: number;
  n2: number;
  n3: number;

  titulo(): string {
    return 'QUESTÃO 13';
  }

  entradaDeDados(): void {}
  processamentoDosDados() {}
  saidaDosDados() {}
}
// Desenvolva um algoritmo que efetue a leitura de três
// valores numéricos representando os lados de um triângulo. O
// algoritmo deverá verificar e informar se os lados fornecidos
// formam realmente um triângulo (cada lado é menor que a
// soma dos outros dois lados). Se esta condição for verdadeira,
// deverá ser indicado qual tipo de triângulo foi formado:
// isósceles (dois lados iguais e um diferente), escaleno (todos os
// lados diferentes) ou eqüilátero (todos os lados são iguais)
