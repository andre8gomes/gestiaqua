import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class AddempresaService {

  SERVER_URL = `${AppSettings.API_ENDPOINT}/`;

  constructor(private http: HttpClient) { }

  add_empresa(nome_empresa, localizacao, telefone, email_empresa, utilizador, palavra_passe, nome, telemovel, email){
    const httpOptions_envia = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let nova_empresa = {nome_empresa:nome_empresa, localizacao:localizacao, telefone:telefone, email_empresa:email_empresa, utilizador:utilizador, palavra_passe:palavra_passe, nome:nome, telemovel:telemovel, email:email};
    //alert('Nome Empresa: ' + nova_empresa.nome_empresa + 'Localização: ' + nova_empresa.localizacao + 'Telefone: ' + nova_empresa.telefone + 'Email Empresa: ' + nova_empresa.email_empresa + ' Utilizador: ' + nova_empresa.utilizador + ' Palavra-passe: ' + nova_empresa.palavra_passe + ' Nome: ' + nova_empresa.nome + ' Telemovel: ' + nova_empresa.telemovel + ' Email: ' + nova_empresa.email);
    return this.http.post<any>(this.SERVER_URL + 'add_empresa', nova_empresa, httpOptions_envia);
  }
}