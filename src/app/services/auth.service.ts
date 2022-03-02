import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Admin } from '../shared/interface/admin-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) { }

  private postQuery<T>(query: string, data: any){
    query = environment.url + query;
    return this.http.post<T>( query, data );
  }

  public login(user: Admin){
    const url = '/auth/login';
    return this.postQuery(url, user);
  }

  public obtenerToken(): string {
    return localStorage.getItem('acces_token');
  }


}
