import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list/:id_mesa',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'promocoes', loadChildren: './promocoes/promocoes.module#PromocoesPageModule' },
  { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaPageModule' },
  { path: 'cardapio', loadChildren: './cardapio/cardapio.module#CardapioPageModule' },
  { path: 'contato', loadChildren: './contato/contato.module#ContatoPageModule' },
  { path: 'porcoes', loadChildren: './categorias/porcoes/porcoes.module#PorcoesPageModule' },
  { path: 'cervejas', loadChildren: './categorias/cervejas/cervejas.module#CervejasPageModule' },
  { path: 'destilados', loadChildren: './categorias/destilados/destilados.module#DestiladosPageModule' },
  { path: 'drinks', loadChildren: './categorias/drinks/drinks.module#DrinksPageModule' },
  { path: 'refrigerantes', loadChildren: './categorias/refrigerantes/refrigerantes.module#RefrigerantesPageModule' },
  { path: 'sucos', loadChildren: './categorias/sucos/sucos.module#SucosPageModule' },
  { path: 'qrcode', loadChildren: './qrcode/qrcode.module#QrcodePageModule' },
  { path: 'instrucoes', loadChildren: './instrucoes/instrucoes.module#InstrucoesPageModule' },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
