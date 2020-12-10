import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { cListaVendita } from '../classes/listaVendita';
import { cUtente } from '../classes/utente';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  getDolci(){
    let url="http://localhost:8080/pasticceria-test/rs/backOffice/getDolciList";   
    return this.http.get(url);
  }

  getListaVendita(){
    let url="http://localhost:8080/pasticceria-test/rs/backOffice/getListaVendita";   
    return this.http.get(url);
  }

  inserimentoDolce(listaVendita: cListaVendita){
    let url="http://localhost:8080/pasticceria-test/rs/backOffice/inserimentoDolce";   
    return this.http.post(url,listaVendita);
  }

  userLogin(utente: cUtente){
    let url="http://localhost:8080/pasticceria-test/rs/backOffice/login";   
    return this.http.post(url,utente);
  }
}
