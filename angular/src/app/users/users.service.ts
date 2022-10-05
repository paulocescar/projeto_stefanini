import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';
import { user } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private entryPoint : string = "users";

  novo(user: user) {
    return this.http.post(env.apiBaseUrl + this.entryPoint, user).toPromise();
  }
  
  listar() {  
    return this.http.get(env.apiBaseUrl + this.entryPoint).toPromise();
  }

  excluir(id: string) {
    return this.http.delete(env.apiBaseUrl + this.entryPoint + '/' + id + "/delete" ).toPromise();
  }

  obterUm(id: number) {
    return this.http.get(env.apiBaseUrl + this.entryPoint + '/' + id).toPromise();
  }

  atualizar(id: number, user: user) {
    return this.http.put(env.apiBaseUrl + this.entryPoint + '/' + id, user).toPromise();
  }
}
