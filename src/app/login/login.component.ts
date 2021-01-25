import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as sha512 from 'js-sha512';

import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  utilizador=new FormControl('');
  palavra_passe=new FormControl('');

  pass_encriptada:any;

  resposta:any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  btnClick_login() {
    this.pass_encriptada = this.incripta(this.palavra_passe.value);
    this.loginService.login(this.utilizador.value,  this.pass_encriptada)
    .subscribe(resposta => {
      this.resposta = resposta;
      //console.log("teste----->", this.resposta);
      if(this.resposta == null){
        alert('Login inválido');
      }else{
        if(resposta[0].perfil == 2){
          let perfil = 'perfil';
          sessionStorage.setItem('perfil', resposta[0].perfil);
          sessionStorage['token'] = 'smaq' + sessionStorage.getItem('id_utilizador');
          this.router.navigate(['/empresas']);
        }
        else{
          alert('Login inválido');
        }
      }
    });
  }

  incripta(pass){
    return (sha512.sha512(pass));
  }
}
