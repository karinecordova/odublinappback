import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.page.html',
  styleUrls: ['./promocoes.page.scss'],
})
export class PromocoesPage implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.get();
  }
  result : any;
  promocao : any;
  get(){
    //chama a tela de aguarde
    this.appService.obterPromocao()
    .then((response)=>{
      this.result = JSON.stringify(response);
      this.result= response;
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }
}
