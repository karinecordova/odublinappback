import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private appService : AppService) { 
   
  }

  ngOnInit() {
    this.getAgenda();
    this.getPromocao();
    this.getProduto();
   
  }
  result : any;
  agenda : any;
  result2 : any;
  promocao : any;
  result3 : any;
  produto : any;
  dataformatada: string;
  datanova:any;
  
    
  getAgenda(){
    //chama a tela de aguarde
    this.appService.obterHomeAgenda()
    .then((response)=>{
      this.result = JSON.stringify(response);
      this.result= response;
      this.datanova = this.result[0].data;
      //fecha tela de aguarde
       this.dataformatada = this.datanova.split("-");
           
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }

  
  getPromocao(){
    //chama a tela de aguarde
    this.appService.obterHomePromocao()
    .then((response)=>{
      this.result2 = JSON.stringify(response);
      this.result2= response;
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result2 = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }
  getProduto(){
    //chama a tela de aguarde
    this.appService.obterHomeProduto()
    .then((response)=>{
      this.result3 = JSON.stringify(response);
      this.result3= response;
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result3 = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }

  
}
