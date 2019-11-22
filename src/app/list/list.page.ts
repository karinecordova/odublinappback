import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { StringMapWithRename } from '@angular/core/src/render3/jit/compiler_facade_interface';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
;
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  id_mesa: any;
  sub:any;
  
  constructor(private appService : AppService, public http: HttpClient, public alertController: AlertController, private navCtrl: NavController, private route: ActivatedRoute) { 
    this.items = [
    {id:1, name: "Porções", expanded: false },
    {id:2, name: "Águas e Refrigerantes ", expanded: false },
    {id:3, name: "Sucos ", expanded: false },
    {id:4,name: "Cervejas ", expanded: false },
    {id:5,name: "Destilados ", expanded: false },
    {id:6,name: "Drinks ", expanded: false },
      
     ];

     this.sub = this.route.params.subscribe(params => {
      this.id_mesa = params['id_mesa']; 
    });
  }
 
  ngOnInit() {
    this.getPorcoes();
    this.getCervejas();
    this.getRefrigerantes();
    this.getSucos();
    this.getDestilados();
    this.getDrinks();
  }

  result:any; result2:any; result3:any;result4:any;result5:any; result6:any;
  porcoes : any;
  cervejas: any;
  refrigerantes: any;
  sucos:any;
  drinks:any;
  destilados:any;
  nomeproduto:any;
  contador:number;
  i:number;
  obs: any;
  colum:number;

  
  public items: any = [];
  public produtoSelecionado: any=[];

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  
  
    produtoEscolhido(e, porcoes, refrigerantes, drinks, cervejas,sucos,destilados){
      if(e.currentTarget.checked) {
        this.produtoSelecionado.push(porcoes, drinks, refrigerantes, cervejas, sucos,destilados);
      } else {
        for(let i =0; i < this.produtoSelecionado.length; i ++) {
          if(this.produtoSelecionado[i].id == porcoes.id) {
            this.produtoSelecionado.splice(i, 1);
          }
          if(this.produtoSelecionado[i].id == drinks.id) {
            this.produtoSelecionado.splice(i, 1);
          }
          if(this.produtoSelecionado[i].id == cervejas.id) {
            this.produtoSelecionado.splice(i, 1);
          }
          if(this.produtoSelecionado[i].id == sucos.id) {
            this.produtoSelecionado.splice(i, 1);
          }
          if(this.produtoSelecionado[i].id == refrigerantes.id) {
            this.produtoSelecionado.splice(i, 1);
          }
          if(this.produtoSelecionado[i].id == destilados.id) {
            this.produtoSelecionado.splice(i, 1);
          }
        }
      }
         console.log(this.produtoSelecionado);
      }


      async submit() {
        let index = 0;
        let myData = {'id_mesa':this.id_mesa, 'obs': this.obs};
          for (let i = 0;  i < this.produtoSelecionado.length; i++){
            if(!this.produtoSelecionado[i]) continue;
            index++;
            myData['id_produto'+index] = this.produtoSelecionado[i].id;
            myData['nome_produto'+index] = this.produtoSelecionado[i].nome_produto;
            myData['quantidade'+index] = this.produtoSelecionado[i].quantidade;
            myData['valor'+index] = this.produtoSelecionado[i].valor;
           
          }

        console.log(myData); 
         
        var link = 'http://weblages.com.br/neri/odublinapi/pedido/';     
              
         let strAlert='';
         let idx = 0;
         Object.entries(myData).forEach(([key, value]) => {
          if(key.includes('nome_produto')) {
            strAlert += value + ', QNT: ' + myData['quantidade'+ key.substr(key.length-1)] +  '<br>' + '<br>';
          }
             
        });
       

         const alert = await this.alertController.create({
          header: 'Confirmação',
          message: strAlert,
         
          buttons: [
            {
              text: 'Cancelar',
              handler: () => {
               this.navCtrl.navigateForward('home')
              },
              
            },
            {
              text: 'Enviar',
              handler: () => {
                this.http.post(link, JSON.stringify(myData))
                .subscribe(async data => {
                this.produtoSelecionado.response = data["_body"];    
              });
               this.navCtrl.navigateForward('home')
              },
              
            }
          ]
        });
    
        await alert.present();
        /*, async error => {
        console.log("Oooops!");
       
         const alert = await this.alertController.create({
          header: 'Erro ',
          message: 'Erro ao processar seu pedido, tente mais tarde!',
          buttons: ['OK']
        });
    
        await alert.present();
        }*/
      }
      
      
  getPorcoes(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(1)
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
  getRefrigerantes(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(5)
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
  getSucos(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(6)
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

  getCervejas(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(2)
    .then((response)=>{
      this.result4 = JSON.stringify(response);
      this.result4= response;
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result4 = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }
  getDestilados(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(3)
    .then((response)=>{
      this.result5 = JSON.stringify(response);
      this.result5= response;
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result5 = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }

  getDrinks(){
    //chama a tela de aguarde
    this.appService.obterProdutocomid(4)
    .then((response)=>{
      this.result6 = JSON.stringify(response);
      this.result6= response;
      //fecha tela de aguarde
    })
    .catch((response)=>{
      this.result6 = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }
}
