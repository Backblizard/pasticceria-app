import { Component, OnInit } from '@angular/core';
import { IDolce } from '../interface/dolce';
import { RestService } from '../services/rest.service';
import { CommonService } from '../services/common.service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { cListaVendita } from '../classes/listaVendita';
import { IListaVenditaResult } from '../interface/listaVenditaResult';
import { cDolce } from '../classes/dolce';


@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css']
})
export class InserimentoComponent implements OnInit {

  public dolciList: IDolce[] = [];
  public listaVendita: IListaVenditaResult[] = [];
  public itemId: number = 0;
  public quantitaItem: number = 0;
  public prezzoUnit: string = "0€";
  public prezzoTot: string = "0€";

  constructor(private restService: RestService,
              private route: ActivatedRoute,
              private router: Router,
              private common: CommonService) { 
    this.restService.getDolci().subscribe((data: any) =>{ 
      this.dolciList = data;
    });
  }

  ngOnInit(): void {

  }

  
  calcolaPrezzo(value: any) {
    this.dolciList.forEach(element => {
      if(this.itemId == element.tokenDolce){
        this.prezzoUnit = element.prezzo + '€';
        this.prezzoTot = (element.prezzo * this.quantitaItem) + '€';
      }
    });
  }

  goNext(id: string) {
    var listaVenditaBean = new cListaVendita();
    var dolceItem = new cDolce();
    listaVenditaBean.quantita = this.quantitaItem;
    dolceItem.tokenDolce = this.itemId;
    listaVenditaBean.dolce = dolceItem;
    this.restService.inserimentoDolce(listaVenditaBean).subscribe((data: any) =>{
      this.listaVendita = data; 
      if('OK' == data.message) {
        this.openModal(id);
      }
    });
  }

  closeModal(id: string){
    this.common.closeModal(id);
    this.router.navigate(['pasticceria'])
  }

  openModal(id: string){
    this.common.openModal(id);
  }
  

}
