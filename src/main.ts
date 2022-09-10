import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoDois } from './questao_2/questao2';
import { QuestaoSeis } from './questao_6/questao6';

const algoritimos: Array<IAlgoritimo> = [new QuestaoDois(), new QuestaoSeis()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
