import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import {AlertasService} from '../services/alertas.service';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  resposta: any;
  resp: any;

  problemas: Array<String> = [];

  constructor(private alertasService: AlertasService, private router: Router) { }

  ngOnInit() {
    this.alertasService.getProblemas()
    .subscribe(resposta => {
      this.resposta = resposta;
      //console.log("teste----->", this.resposta);
      //console.log("teste----->", this.resposta);

      if(this.resposta == null){
        document.getElementById('sem_alertas').style.display = 'inline';
      }
    });
  }

  btnClickGuardar(){
    if(this.problemas.length > 0){
      this.alertasService.problemas_feitos(this.problemas)
        .subscribe(resp => {
          this.resp = resp;
          //console.log("Notificacoes ----->", this.resp);
          if(this.resp[0].resposta == 'true'){
            alert('Com sucesso');
            this.router.navigate(['/empresas']);
          }
          else{
            alert('Erro ao adicionar problemas vistos');
          }
        });
    }
    else{
      alert('Não possui problemas para enviar');
    }
  }

  btnClickCancelar(){
    this.router.navigate(['/empresas']);
  }


  verificarCheckBox(id_problema) {
    var index;
    if((index = this.problemas.indexOf(id_problema)) !== -1) {
      this.problemas.splice(index, 1);
    } else {
      this.problemas.push(id_problema);
    }
  }

  changecolor(estado){
    //console.log(estado);
    if(estado == 1){
      return 'rgb(185,185,185)';
   }
 }

 changecolor_letter(estado){
    //console.log(estado);
    if(estado == 1){
      return 'rgb(255,255,255)';
    }
  }

}
