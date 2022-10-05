import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor(private http: HttpClient) { }

  private entryPoint : string = "addresses";

  novo(user: any) {
    return this.http.post(env.apiBaseUrl + this.entryPoint, user).toPromise();
  }
  
  listar() {  
    return this.http.get(env.apiBaseUrl + this.entryPoint).toPromise();
  }

  excluir(id: string) {
    return this.http.delete(env.apiBaseUrl + this.entryPoint + '/' + id + "/delete" ).toPromise();
  }

  obterUm(id: string) {
    return this.http.get(env.apiBaseUrl + this.entryPoint + '/' + id).toPromise();
  }

  atualizar(user: any) {
    return this.http.put(env.apiBaseUrl + this.entryPoint + '/' + user.id, user).toPromise();
  }
}
