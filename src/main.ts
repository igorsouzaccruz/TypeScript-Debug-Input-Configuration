import { GerenciadorDeAlgoritimo } from './gerenciador_de_algoritimo';
import { IAlgoritimo } from './interface/algoritimo';
import { QuestaoTres } from './questao_3/questao3';
import { QuestaoQuatro } from './questao_4/questao4';
import { QuestaoCinco } from './questao_5/questao5';

const algoritimos: Array<IAlgoritimo> = [new QuestaoCinco()];

const gerenciadorDosAlgoritimos: GerenciadorDeAlgoritimo =
  new GerenciadorDeAlgoritimo(algoritimos);

gerenciadorDosAlgoritimos.executar();
