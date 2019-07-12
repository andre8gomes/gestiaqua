import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {EditempresaService} from '../services/editempresa.service';

@Component({
  selector: 'app-editempresa',
  templateUrl: './editempresa.component.html',
  styleUrls: ['./editempresa.component.css']
})
export class EditempresaComponent implements OnInit {

  id_e_empresa: number;
  nome_e_empresa: any;
  telefone_e_empresa:any;
  email_e_empresa:any;
  localizacao_e:any;
  nome_e_admin: any;
  telemovel_e_admin:any;
  email_e_admin:any;

  resp: any;

  nome_empresa: FormControl;
  telefone_empresa: FormControl;
  email_empresa=new FormControl;
  localizacao=new FormControl;

  nome_admin=new FormControl;;
  telemovel_admin=new FormControl;
  email_admin=new FormControl;

  mail_empresa:String;
  mail_admin:String;

  constructor(private editempresaService: EditempresaService, private router: Router, private routers: ActivatedRoute){ }

  ngOnInit() {
    this.routers.queryParams.subscribe(params => {
      this.id_e_empresa = +params['id_empresa'],
      this.nome_e_empresa = params['nome_empresa'],
      this.telefone_e_empresa = params['telefone'],
      this.email_e_empresa = params['email'],
      this.localizacao_e = params['localizacao'],
      this.nome_e_admin = params['nome_admin'],
      this.telemovel_e_admin = params['telemovel_admin'],
      this.email_e_admin = params['email_admin']
    });

    this.nome_empresa = new FormControl(this.nome_e_empresa);
    this.telefone_empresa = new FormControl(this.telefone_e_empresa);
    this.email_empresa = new FormControl(this.email_e_empresa);
    this.localizacao = new FormControl(this.localizacao_e);
    this.nome_admin = new FormControl(this.nome_e_admin);
    this.telemovel_admin = new FormControl(this.telemovel_e_admin);
    this.email_admin = new FormControl(this.email_e_admin);
  }

  btnClickGuardar(){
    this.mail_empresa = this.email_empresa.value;
    this.mail_admin = this.email_admin.value;
    if( this.nome_empresa.value != '' && this.localizacao.value != ''  && (this.telefone_empresa.value != '' && this.telefone_empresa.value.length == 9) && (this.email_empresa.value != '' && this.mail_empresa.match('[a-z0-9._%+-]+@[a-z].+[a-z]')) && this.nome_admin.value != '' && (this.telemovel_admin.value != '' && this.telemovel_admin.value.length == 9) && (this.email_admin.value != '' && this.mail_admin.match('[a-z0-9._%+-]+@[a-z].+[a-z]'))){
        //alert(this.id_e_empresa + '-' + this.nome_empresa.value + '-' + this.localizacao.value + '-' + this.telefone_empresa.value + '-' + this.email_empresa.value + '-' + this.nome_admin.value + '-' + this.telemovel_admin.value + '-' + this.email_admin.value);
        this.editempresaService.edit_empresa(this.id_e_empresa, this.nome_empresa.value, this.localizacao.value, this.telefone_empresa.value, this.email_empresa.value, this.nome_admin.value, this.telemovel_admin.value, this.email_admin.value)
          .subscribe(resp => {
            this.resp = resp;
            //console.log("Edit empresa ----->", this.resp);
            if(this.resp[0].resposta == 'true'){
              alert('Com sucesso');
              this.router.navigate(['/empresas']);
            }
            else if(this.resp[0].resposta == 'false_e'){
              alert('Empresa já removida');
              this.router.navigate(['/empresas']);
            }
            else if(this.resp[0].resposta == 'false_i'){
              alert('Utilizador já existente');
              this.router.navigate(['/empresas']);
            }
            else{
              alert('Erro ao editar empresa');
            }
          });
        }
    else{

      if(this.nome_empresa.value == ''){
        document.getElementById('nomee_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('nomee_edit_empresa').style.display = 'none';
      }

      if(this.localizacao.value == ''){
        document.getElementById('localizacao_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('localizacao_edit_empresa').style.display = 'none';
      }

      if(this.telefone_empresa.value == ''){
        document.getElementById('telefone_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telefone_edit_empresa').style.display = 'none';
      }

      if(this.telefone_empresa.value != '' && this.telefone_empresa.value.length != 9){
        document.getElementById('telefonem_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telefonem_edit_empresa').style.display = 'none';
      }

      if(this.email_empresa.value == ''){
        document.getElementById('emaile_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emaile_edit_empresa').style.display = 'none';
      }
      
      if(this.email_empresa.value != '' && !this.mail_empresa.match('[a-z0-9._%+-]+@[a-z].+[a-z]')){
        document.getElementById('emailev_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emailev_edit_empresa').style.display = 'none';
      }

      if(this.nome_admin.value == ''){
        document.getElementById('nomeu_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('nomeu_edit_empresa').style.display = 'none';
      }

      if(this.telemovel_admin.value == ''){
        document.getElementById('telemovelu_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telemovelu_edit_empresa').style.display = 'none';
      }

      if(this.telemovel_admin.value != '' && this.telemovel_admin.value.length != 9){
        document.getElementById('telemovelum_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('telemovelum_edit_empresa').style.display = 'none';
      }

      if(this.email_admin.value == ''){
        document.getElementById('emailu_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emailu_edit_empresa').style.display = 'none';
      }
      
      if(this.email_admin.value != '' && !this.mail_admin.match('[a-z0-9._%+-]+@[a-z].+[a-z]')){
        document.getElementById('emailuv_edit_empresa').style.display = 'inline';
      }
      else{
        document.getElementById('emailuv_edit_empresa').style.display = 'none';
      }
    }
   }

  btnClickCancelar(){
    this.router.navigate(['/empresas']);
  }

}
