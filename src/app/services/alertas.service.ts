import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  SERVER_URL = `${AppSettings.API_ENDPOINT}/`;

  constructor(private http: HttpClient) { }

  getProblemas() {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let info_alertas = {};

    return this.http.post<any>(this.SERVER_URL + 'problemas', info_alertas, httpOptions);
  }

  problemas_feitos(problemas){
    const httpOptions_envia = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    let novo_problemas = {problemas:'['+problemas+']'};
    //alert(' problema: ' + novo_problemas.problemas);
    return this.http.post<any>(this.SERVER_URL + 'rm_problema', novo_problemas, httpOptions_envia);  
  }
}