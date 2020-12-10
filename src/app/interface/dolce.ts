import { IListaIngredienti } from './ListaIngredienti';

export interface IDolce{
    nome: string;
    prezzo: number;
    tokenDolce: number;
    listaIngredienti: Array<IListaIngredienti>;
}