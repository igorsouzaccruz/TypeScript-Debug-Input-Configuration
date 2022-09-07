import PromptSync from 'prompt-sync'
import { QuestaoUm } from './questao_1/questao1';
import { QuestaoQuatro } from './questao_4/questao4';
import { QuestaoSete } from './questao_7/questao7';
const prompter = PromptSync();

const numero: number = Number(prompter("(Q1) - Informe um numero: "));

const questao1 = new QuestaoUm(numero);

const questao4 = new QuestaoQuatro();


const votantes: number =  Number(prompter("(Q7) Informe número de votantes? "));

const  questao7 = new QuestaoSete();

for (let index = 0; index < votantes; index++) {
    const voto: number = Number(prompter("Deseja votar em quem? Lembrando números (1, 2 ou 3) "));
    questao7.analisarVotos(voto);
}

console.clear();
questao1.mostrarSaidaDeDados();
questao4.mostrarSaidaDeDados();
questao7.mostrarSaidaDeDados();