import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-cervejas',
  templateUrl: './cervejas.page.html',
  styleUrls: ['./cervejas.page.scss'],
})
export class CervejasPage implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.get();
  }
  result : any;
  produto : any;
 
  
  get(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(2)
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
