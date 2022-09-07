import PromptSync from 'prompt-sync'
import { QuestaoUm } from './questao_1/questao1';
import { QuestaoQuatro } from './questao_4/questao4';
const prompter = PromptSync();

const numero: number = Number(prompter("(Q1) - Informe um numero "));

const questao1 = new QuestaoUm(numero);

const questao4 = new QuestaoQuatro();

console.clear();
questao1.mostrarSaidaDeDados();
questao4.mostrarSaidaDeDados();