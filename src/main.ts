import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoCinco } from './questao_5/questao5';
import { QuestaoSeis } from './questao_6/questao6';
import { QuestaoSete } from './questao_7/questao7';
import { QuestaoOito } from './questao_8/questao8';

const algoritimos: Array<IAlgoritimo> = [
  new QuestaoCinco(),
  new QuestaoSeis(),
  new QuestaoSete(),
  new QuestaoOito(),
];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
