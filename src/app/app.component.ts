import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pasticceria-app';

  constructor(private commonService: CommonService){}

  ngOnInit(){
    $(document).ready(function () {
      $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
      });
      $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
        $('.animated-icon1').toggleClass('open');
    });
    });     
  }

  isLogged(){
    return this.commonService.isLogged();
  }

  logout(){
    this.commonService.logout();
  }
}
