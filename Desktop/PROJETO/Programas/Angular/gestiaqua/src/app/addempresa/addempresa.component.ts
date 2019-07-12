import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import * as sha512 from 'js-sha512';

import {AddempresaService} from '../services/addempresa.service';

@Component({
  selector: 'app-addempresa',
  templateUrl: './addempresa.component.html',
  styleUrls: ['./addempresa.component.css']
})
export class AddempresaComponent implements OnInit {

  resposta: any;

  pass_encriptada:any;

  nome_empresa=new FormControl('');
  telefone_empresa=new FormControl('');
  email_empresa=new FormControl('');
  localizacao=new FormControl('');

  nome_admin=new FormControl('');
  utilizador_admin=new FormControl('');
  telemovel_admin=new FormControl('');
  email_admin=new FormControl('');
  palavra_passe=new FormControl('');
  confirmapasse = new FormControl('');

  mail_empresa:String;
  mail_admin:String;
  tele_empresa:any;
  tele_admmin:any;

  constructor(private addempresaService: AddempresaService, private router: Router) { }

  ngOnInit(){
  }
   
  btnClickGuardar(){
    this.mail_empresa = this.email_empresa.value;
    this.mail_admin = this.email_admin.value;

    if(this.nome_empresa.value != '' && (this.telefone_empresa.value != '' && this.telefone_empresa.value.length == 9) && (this.email_empresa.value != '' && this.mail_empresa.match('[a-z0-9._%+-]+@[a-z].+[a-z]')) && this.localizacao.value != '' && this.nome_admin.value != '' && this.utilizador_admin.value != '' && (this.telemovel_admin.value != '' && this.telemovel_admin.value.length == 9) && (this.email_admin.value != '' && this.mail_admin.match('[a-z0-9._%+-]+@[a-z].+[a-z]')) && (this.palavra_passe.value != '' && this.palavra_passe.value.length > 5) && this.confirmapasse.value != ''){
      if(this.palavra_passe.value == this.confirmapasse.value){
        //console.log('sss', this.palavra_passe.value, 'sssssss', this.confirmapasse.value)
        document.getElementById('passd_add_empresa').style.display = 'none';
        this.pass_encriptada = this.incripta(this.palavra_passe.value);
        //alert(this.nome.value + '-' + this.utilizador.value + '-' + this.palavra_passe.value + '-' + this.telemovel.value + '-' + this.email.value);
        this.addempresaService.add_empresa(this.nome_empresa.value, this.localizacao.value, this.telefone_empresa.value, this.email_empresa.value, this.utilizador_admin.value, this.pass_encriptada, this.nome_admin.value, this.telemovel_admin.value, this.email_admin.value)
          .subscribe(resposta => {
            this.resposta = resposta;
            //console.log("Add empresa ----->", this.resposta);
            if(this.resposta != null){
              if(this.resposta[0].resposta == 'true'){
                alert('Empresa adicionada com sucesso');
                this.router.navigate(['/empresas']);
              }
              else if(this.resposta[0].resposta == 'false_i'){
                alert('Utilizador já existente');
                this.router.navigate(['/empresas']);
              }
              else{
                alert('Erro ao adicionar empresa');
              }
            }
          });
      }
      else{
        document.getElementById('passd_add_empresa').style.display = 'inline';
      }
    }
    else{
      if(this.nome_empresa.value == ''){
        document.getElementById('nomee_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('nomee_add_empresa').style.display = 'none';
      }
      if(this.telefone_empresa.value == ''){
        document.getElementById('telefone_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telefone_add_empresa').style.display = 'none';
      }
      if(this.telefone_empresa.value != '' && this.telefone_empresa.value.length != 9){
        document.getElementById('telefonem_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telefonem_add_empresa').style.display = 'none';
      }
      if(this.email_empresa.value == ''){
        document.getElementById('emaile_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emaile_add_empresa').style.display = 'none';
      }
      if(this.email_empresa.value != '' && !this.mail_empresa.match('[a-z0-9._%+-]+@[a-z].+[a-z]')){
        document.getElementById('emailev_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emailev_add_empresa').style.display = 'none';
      }
     
      if(this.localizacao.value == ''){
        document.getElementById('localizacao_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('localizacao_add_empresa').style.display = 'none';
      }


      if(this.nome_admin.value == ''){
        document.getElementById('nomeu_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('nomeu_add_empresa').style.display = 'none';
      }

      if(this.utilizador_admin.value == ''){
        document.getElementById('utilizador_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('utilizador_add_empresa').style.display = 'none';
      }

      if(this.telemovel_admin.value == ''){
        document.getElementById('telemovelu_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telemovelu_add_empresa').style.display = 'none';
      }

      if(this.telemovel_admin.value != '' && this.telemovel_admin.value.length != 9){
        document.getElementById('telemovelum_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telemovelum_add_empresa').style.display = 'none';
      }

      if(this.email_admin.value == ''){
        document.getElementById('emailu_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emailu_add_empresa').style.display = 'none';
      }
      
      if(this.email_admin.value != '' && !this.mail_admin.match('[a-z0-9._%+-]+@[a-z].+[a-z]')){
        document.getElementById('emailuv_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emailuv_add_empresa').style.display = 'none';
      }

      if(this.palavra_passe.value == ''){
        document.getElementById('pass_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('pass_add_empresa').style.display = 'none';
      }

      if(this.palavra_passe.value != '' && this.palavra_passe.value.length <= 5){
        document.getElementById('pass_min_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('pass_min_add_empresa').style.display = 'none';
      }

      if(this.confirmapasse.value == ''){
        document.getElementById('cpass_add_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('cpass_add_empresa').style.display = 'none';
      }
    }
  }
  
  btnClickCancelar(){
    this.router.navigate(['/empresas']);
  }

  incripta(pass){
    return (sha512.sha512(pass));
  }

  
}
