import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefrigerantesPage } from './refrigerantes.page';

const routes: Routes = [
  {
    path: '',
    component: RefrigerantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RefrigerantesPage]
})
export class RefrigerantesPageModule {}
