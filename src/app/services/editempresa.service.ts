import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';


@Injectable({
  providedIn: 'root'
})
export class EditempresaService {

  SERVER_URL = `${AppSettings.API_ENDPOINT}/`;

  pass_encriptada:any;

  constructor(private http: HttpClient) { }

  edit_empresa(id_empresa, nome_empresa, localizacao, telefone, email, nome_admin, telemovel_admin, email_admin){
    const httpOptions_envia = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    
      let edit_empresa = { id_empresa:id_empresa, nome_empresa:nome_empresa, localizacao:localizacao, telefone:telefone, email:email, nome_admin:nome_admin, telemovel_admin:telemovel_admin, email_admin:email_admin};
      //alert(' Empresa: ' + edit_empresa.id_empresa + ' Nome empresa: ' + edit_empresa.nome_empresa + ' Localização: ' + edit_empresa.localizacao + ' Telefone: ' + edit_empresa.telefone + ' Email empresa: ' + edit_empresa.email + ' nome: ' + edit_empresa.nome_admin + ' telemovel: ' + edit_empresa.telemovel_admin + ' email: ' + edit_empresa.email_admin);
      return this.http.post<any>(this.SERVER_URL + 'edit_empresa', edit_empresa, httpOptions_envia);
    }
}