import { Component, OnInit } from '@angular/core';
import { IDolce } from '../interface/dolce';
import { IListaIngredienti } from '../interface/ListaIngredienti';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-dolce-detail',
  templateUrl: './dolce-detail.component.html',
  styleUrls: ['./dolce-detail.component.css']
})
export class DolceDetailComponent implements OnInit {

  public dolceItem: IDolce | undefined;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.currentObject.subscribe(dolceItem=> {
      this.dolceItem = dolceItem;
      console.warn(this.dolceItem);
    })
  }

  getSection(){
    var section: string[] = [];
    if(this.dolceItem != undefined) {
      this.dolceItem.listaIngredienti.forEach(element => {
          section.push(element.titoloSezione);
      });
      section = Array.from(new Set(section));
    }
    return section;
  }

  getItemFilterSection(section: string){
    var listaIngredienti: IListaIngredienti[] = [];
    if(this.dolceItem != undefined){
      this.dolceItem.listaIngredienti.forEach(element => {
          if(element.titoloSezione == section){
            listaIngredienti.push(element);
          }
       });
    }
    return listaIngredienti;
  }

}
