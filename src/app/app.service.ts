import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}
$id:number;
  obterAgenda() {
    let url='http://weblages.com.br/neri/odublinapi/agenda';
    return this.http.get(url).toPromise();
  }
  obterPromocao() {
    let url='http://weblages.com.br/neri/odublinapi/promocao';
    return this.http.get(url).toPromise();
  }
  obterProduto() {
    let url='http://weblages.com.br/neri/odublinapi/produto';
    return this.http.get(url).toPromise();
  }
  obterCategoria() {
    let url='http://weblages.com.br/neri/odublinapi/categoria';
    return this.http.get(url).toPromise();
  }

  obterProdutocomid(id) {
    let url='http://weblages.com.br/neri/odublinapi/produto/'+id;
    return this.http.get(url).toPromise();
  }
  obterHomeAgenda() {
    let url='http://weblages.com.br/neri/odublinapi/home/agenda';
    return this.http.get(url).toPromise();
  }
  obterHomePromocao() {
    let url='http://weblages.com.br/neri/odublinapi/home/promocao';
    return this.http.get(url).toPromise();
  }
  obterHomeProduto() {
    let url='http://weblages.com.br/neri/odublinapi/home/produto';
    return this.http.get(url).toPromise();
  }

 
}
