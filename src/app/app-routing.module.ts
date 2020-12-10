import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDolciComponent } from './lista-dolci/lista-dolci.component'
import { InserimentoComponent } from './inserimento/inserimento.component'
import { DolceDetailComponent } from './dolce-detail/dolce-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pasticceria',
    pathMatch: 'full'
  },
  {
    path: 'pasticceria',
    component: ListaDolciComponent
  },
  {
    path: 'pasticceria/inserimento',
    component: InserimentoComponent
  },
  {
    path: 'pasticceria/detail/:id',
    component: DolceDetailComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
