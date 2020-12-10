import { Timestamp } from 'rxjs';
import { IDolce } from './dolce';

export interface IListaVendita{
    tokenListaVendita: string;
    quantita: number;
    dolce: IDolce;
    dataTimestamp: string;
}