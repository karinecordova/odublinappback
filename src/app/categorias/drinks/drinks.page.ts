import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.get();
  }
  result : any;
  produto : any;
 
  
  get(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(4)
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
