import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

import { AddempresaComponent } from './addempresa/addempresa.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { GeralComponent } from './geral/geral.component';
import { LoginComponent } from './login/login.component';
import { EditempresaComponent } from './editempresa/editempresa.component';
import { AlertasComponent } from './alertas/alertas.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'addempresa', component: AddempresaComponent, canActivate: [AuthGuard]},
  { path: 'empresas', component: EmpresasComponent, canActivate: [AuthGuard]},
  { path: 'geral', component: GeralComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'editempresa', component: EditempresaComponent, canActivate: [AuthGuard]},
  { path: 'alertas', component: AlertasComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
