import { Component, OnInit } from '@angular/core';
import { cUtente } from '../classes/utente';
import { IUtente } from '../interface/utente';
import { RestService } from '../services/rest.service';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router, ParamMap} from '@angular/router';
import { CommonService } from '../services/common.service';
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userUtente: string | undefined;
  public passwordUtente: string | undefined;
  private utenteResult: IUtente | undefined;

  constructor(private restService: RestService,
              private cookieService: CookieService,
              private router: Router,
              private commonService: CommonService) { }

  ngOnInit(): void {
    if(this.isLogged()){
      this.router.navigate(['pasticceria'])
    }
  }

  userLogin(){
    var utente = new cUtente();
    utente.user = this.userUtente;
    utente.password = this.passwordUtente;
    this.restService.userLogin(utente).subscribe((result: any) =>{
      this.utenteResult = result;
      this.cookieService.set("Token",""+this.utenteResult?.JWT);
    }, error => {
      $('.invalid-feedback').show();
    },
    () => {
      this.router.navigate(['pasticceria'])
    });
  }
  
  isLogged(){
    return this.commonService.isLogged();
  }
}
