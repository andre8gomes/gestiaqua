import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  SERVER_URL = `${AppSettings.API_ENDPOINT}/`;

  constructor(private http: HttpClient) { }

  getEmpresas(pesquisa) {
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let info_empresas = {pesquisa:pesquisa};

    return this.http.post<any>(this.SERVER_URL + 'pesquisa_empresas', info_empresas, httpOptions);
  }

  apaga_empresa(id_empresa){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let apaga_empresa = {id_empresa:id_empresa};
    //alert('id empresa:' + id_empresa);

    return this.http.post<any>(this.SERVER_URL + 'rm_empresa', apaga_empresa, httpOptions); 
  }
}