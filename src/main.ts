import PromptSync from 'prompt-sync'
import { QuestaoUm } from './questao_1/questao1';
const prompter = PromptSync();

const numero: number = Number(prompter("Informe um numero "));

const questao1 = new QuestaoUm(numero);

questao1.mostrarSaidaDeDados();