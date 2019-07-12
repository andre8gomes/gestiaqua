import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {EmpresasService} from '../services/empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  resposta: any;
  resp: any;

  pesquisar=new FormControl('');

  pesquisa:any;

  constructor(private empresasService: EmpresasService, private router: Router) { }

  ngOnInit() {
    this.empresasService.getEmpresas(this.pesquisar.value)
    .subscribe(resposta => {
      this.resposta = resposta;
      //console.log("teste----->", this.resposta);

      if(this.resposta == null){
        document.getElementById('sem_empresas').style.display = 'inline';
      }
    });
  }

  btnClickPesquisar(){
    this.router.navigate(['/empresas'], {queryParams:{pesquisa: this.pesquisar.value}});
    this.refresh();
  }

  refresh(){
    this.empresasService.getEmpresas(this.pesquisar.value)
    .subscribe(resposta => {
      this.resposta = resposta;
      //console.log("teste----->", this.resposta);
    });
  }

  btnClickAdicionar(){
    this.router.navigate(['/addempresa']);
  }

  btnClickEditar(id_empresa, nome_empresa, localizacao, telefone, email, nome_admin, telemovel_admin, email_admin){
    this.router.navigate(['/editempresa'], {queryParams:{id_empresa: id_empresa, nome_empresa: nome_empresa, localizacao: localizacao, telefone: telefone, email: email, nome_admin: nome_admin, telemovel_admin: telemovel_admin, email_admin: email_admin}});
  }

  btnClickEliminar(id_empresa){
    if(window.confirm('Tem a certeza que pertende eliminar esta empresa ?')){
      this.empresasService.apaga_empresa(id_empresa)
        .subscribe(resp => {
          this.resp = resp;
          //console.log("Eliminar empresa ----->", this.resp);
          if(this.resposta != null){
            if(this.resp[0].resposta == 'true'){
              alert('Empresa eliminada com sucesso');
              window.location.reload();
            }
            else{
              alert('Erro ao eliminar empresa');
            }
          }
        });
    }
  }

}
