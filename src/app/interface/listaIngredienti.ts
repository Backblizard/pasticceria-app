import { IIngrediente } from './Ingrediente';

export interface IListaIngredienti{
    tokenListaIngredienti: number;
    tokenDolce: number;
    ingrediente: IIngrediente;
    quantita: number;
    unitaDiMisura: string;
    titoloSezione: string;
    dataTimestamp: string;
}