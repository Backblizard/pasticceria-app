import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { IDolce } from '../interface/dolce';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private objectSource = new BehaviorSubject<IDolce |undefined>(undefined);
  currentObject = this.objectSource.asObservable();

  constructor(private cookieService: CookieService) { }

  closeModal(id:string) {
    $('#' + id).hide();
  }

  openModal(id:string) {
    $('#' + id).show();
  }

  setDolceObject(dolceItem: IDolce){
    this.objectSource.next(dolceItem);
  }

  getDate(dataTimestamp: string,format: string |undefined) {
    if(format != undefined && format == 'dd/MM/yyyy'){
      var regex = /\-/g;
      var date = dataTimestamp.substring(0,10).replace(regex,'');
      var anno = date.substring(0,4);
      var mese = date.substring(4,6);
      var giorno = date.substring(6,8);
      return (giorno + '/' + mese + '/' + anno);
    }
    return dataTimestamp.substring(0,10);
  }

  isLogged(){
    if(this.cookieService.get("Token") != undefined && 
       this.cookieService.get("Token").length > 0) {
       return true;
    }
    return false;
  }

  logout(){
    this.cookieService.delete("Token");
  }
}
