import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  SERVER_URL = `${AppSettings.API_ENDPOINT}/`;

  constructor(private http: HttpClient) { }

  getNProblemas() {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let info_nproblemas = {};

    return this.http.post<any>(this.SERVER_URL + 'n_problemas', info_nproblemas, httpOptions);
  }
}