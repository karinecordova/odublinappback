import { Component, OnInit } from '@angular/core';
import {  BarcodeScannerOptions,  BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage implements OnInit {
  ngOnInit(){
   this.scanCode();
  }

  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  id_mesa:any;
  id_mesa_original:any;
    
  constructor(private barcodeScanner: BarcodeScanner, public alertController: AlertController, private navCtrl: NavController, private router: Router) {
   
   //Options
   this.barcodeScannerOptions = {
     showTorchButton: true,
     showFlipCameraButton: true
   };
 }

 scanCode() {
   this.barcodeScanner
     .scan()
     .then(async barcodeData => {
    //   alert("Barcode data " + JSON.stringify(barcodeData));
       this.scannedData = barcodeData;
       this.id_mesa_original=this.scannedData["text"];

       if(this.id_mesa_original=="od@89mZKYu1" || this.id_mesa_original=="od@89mZKYu2" || this.id_mesa_original=="od@89mZKYu3" ){ 
         if(this.id_mesa_original=="od@89mZKYu1"){
            this.id_mesa=1;
         } 
         if(this.id_mesa_original=="od@89mZKYu2"){
          this.id_mesa=2;
         }
         if(this.id_mesa_original=="od@89mZKYu3"){
          this.id_mesa=3;
        }
         const alert = await this.alertController.create({
           header: 'Iniciar Pedido!',
           message: 'Mesa: ' + this.id_mesa,
           buttons: [
             {
               text: 'Cancelar',
               role: 'cancel',
               cssClass: 'secondary',
               handler: (blah) => {
                 console.log('Confirm Cancel: blah');
                 this.goToHome();
               }
             }, {
               text: 'Iniciar Pedido',
               handler: () => {
                 console.log('Confirm Okay');
                 this.goToPedido(this.id_mesa);
               }
             }
           ]
         });      
         await alert.present();
       }
       else{
         alert("Qr code INVÁLIDO ");
         this.goToHome();
       }
     })       
     .catch(err => {
       console.log("Erro", err);
       this.navCtrl.navigateForward('home')
     });
   
 }

 goToPedido(id_mesa){
   this.router.navigate(['/list', id_mesa]);
 }
 goToHome(){
  this.router.navigate(['/home']);
}

}
