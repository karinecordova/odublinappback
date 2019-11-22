import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private appService : AppService) { }

  ngOnInit() {
    this.get();
  }
  result : any;
  agenda : any;
  dataformatadaagenda: string;
  datanova:any;
 
  
  get(){
    //chama a tela de aguarde
    this.appService.obterAgenda()
    .then((response)=>{
      this.result = JSON.stringify(response);
      this.result= response;
      /*this.datanova = this.result[0].data;
      this.dataformatadaagenda = this.datanova.split("-");
      this.result[0].data = this.dataformatadaagenda;
      console.log(this.result);*/
    })
    .catch((response)=>{
      this.result = JSON.stringify(response);
      //fecha tela de aguarde
    });
  }

}
