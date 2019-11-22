import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
})
export class CardapioPage implements OnInit {

  constructor(private appService : AppService, public modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
    this.get();
    
  }
  result : any;
  categoria: any;
  
  get(){
    //chama a tela de aguarde
    this.appService.obterCategoria()
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

  abrirPagina(nomedaPagina:string){
    this.navCtrl.navigateForward(nomedaPagina);
  }

}
