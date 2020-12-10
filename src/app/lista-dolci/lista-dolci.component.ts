import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { RestService } from '../services/rest.service';
import { IListaVendita } from '../interface/listaVendita';
import { CommonService } from '../services/common.service';
declare var $: any;

@Component({
  selector: 'app-lista-dolci',
  templateUrl: './lista-dolci.component.html',
  styleUrls: ['./lista-dolci.component.css']
})
export class ListaDolciComponent implements OnInit {

  private listaVenditaList: IListaVendita[] = [];

  constructor(private restService: RestService,
              private commonService: CommonService,
              private route: ActivatedRoute,
              private router: Router,) {}

  ngOnInit(): void {
    this.restService.getListaVendita().subscribe((data: any) =>{ 
      this.listaVenditaList = data;
      console.warn(this.listaVenditaList);
    });
  }

  showInserimento(){
    this.router.navigate(['pasticceria/inserimento'])
  }
  
  showDetail(id: number){
    this.commonService.setDolceObject(this.listaVenditaList[id].dolce);
    this.router.navigate(['pasticceria/detail',this.listaVenditaList[0].dolce.tokenDolce])
  }

  getListaVendita() {
    return this.listaVenditaList.sort((a: any, b: any) => {
      var dataA: Date = new Date(this.commonService.getDate(a.dataTimestamp,undefined));
      var dataB: Date = new Date(this.commonService.getDate(b.dataTimestamp,undefined));
      return dataB.getTime() - dataA.getTime();
    });
  }

  getDate(dataTimestamp: string){
    return this.commonService.getDate(dataTimestamp,'dd/MM/yyyy')
  }

  isLogged(){
    return this.commonService.isLogged();
  }

  itemAging(id:number){
    var oneDay: number = 24 * 60 * 60 * 1000;
    var data: Date = new Date(this.commonService.getDate(this.listaVenditaList[id].dataTimestamp,undefined));
    var dataOggi: Date = new Date();
    var dateDiff: number = Math.round(Math.abs((data.getTime() - dataOggi.getTime()) / oneDay));
    var newPrice: number = this.listaVenditaList[id].quantita * this.listaVenditaList[id].dolce.prezzo;
    switch(dateDiff){
      case 0:
        return newPrice
      case 1:
          return newPrice
      case 2:
        return (newPrice*80)/100
      case 3:
        return (newPrice*20)/100
      default:
        return 0;
    }
  }

}
