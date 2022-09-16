import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao1/questao1';
import { QuestaoDois } from './questao2/questao2';
import { QuestaoQuatro } from './questao4/questao4';

const algoritimos: Array<IAlgoritimo> = [new QuestaoQuatro()]

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
