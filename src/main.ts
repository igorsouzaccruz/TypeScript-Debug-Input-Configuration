import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao1/questao1';
import { QuestaoDois } from './questao2/questao2';
import { QuestaoTres } from './questao3/questao3';
import { QuestaoQuatro } from './questao4/questao4';
import { QuestaoSeis } from './questao6/questao6';

const algoritimos: Array<IAlgoritimo> = [new QuestaoTres()]

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
