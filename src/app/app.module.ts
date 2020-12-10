import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDolciComponent } from './lista-dolci/lista-dolci.component';
import { HttpClientModule} from '@angular/common/http';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { DolceDetailComponent } from './dolce-detail/dolce-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDolciComponent,
    InserimentoComponent,
    DolceDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
