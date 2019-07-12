import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeralComponent } from './geral/geral.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { LoginComponent } from './login/login.component';
import { AddempresaComponent } from './addempresa/addempresa.component';
import { EditempresaComponent } from './editempresa/editempresa.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    GeralComponent,
    EmpresasComponent,
    LoginComponent,
    AddempresaComponent,
    EditempresaComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
