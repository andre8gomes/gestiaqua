import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SERVER_URL = `${AppSettings.API_ENDPOINT}/`;

  constructor(private http: HttpClient) { }

  login(utilizador, palavra_passe){
    const httpOptions_envia = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let login = {utilizador:utilizador, palavra_passe:palavra_passe};

    return this.http.post<any>(this.SERVER_URL + 'login', login, httpOptions_envia);
  }
}