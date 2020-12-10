import { IDolce } from '../interface/dolce';
import { cDolce } from './dolce';

export class cListaVendita{
    quantita: number | undefined;
    dolce: cDolce | undefined;
    dataTimestamp: Date = new Date();
}