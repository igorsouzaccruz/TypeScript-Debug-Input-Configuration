import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoUm } from './questao_1/questao1';

const algoritimos: Array<IAlgoritimo> = [new QuestaoUm()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
