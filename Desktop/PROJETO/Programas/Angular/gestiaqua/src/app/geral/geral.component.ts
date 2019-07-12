import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {GeralService} from '../services/geral.service';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  resposta: any;
  n_problemas: any;

  constructor(private geralService: GeralService, private router: Router) { }

  ngOnInit() {
    this.geralService.getNProblemas()
    .subscribe(resposta => {
      this.resposta = resposta;
      //console.log("Geral----->", this.resposta);
      if(resposta != null){
        this.n_problemas = resposta[0].n_problemas;
        if(this.n_problemas == 0){
          document.getElementById('n_problema').style.display = 'none';
          document.getElementById('img_bola').style.display = 'none';
        }
        else{
          document.getElementById('n_problema').style.display = 'inline';
          document.getElementById('img_bola').style.display = 'inline';
        }
      }
    });
  }

  btnClickAlertas(){
    this.router.navigate(['/alertas']);
  }

  btnClickSair(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
