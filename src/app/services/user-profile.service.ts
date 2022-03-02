import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends ServicesService {

  id:string;

  constructor(public http: HttpClient) {  
    super(http); 
    this.id = localStorage.getItem('_id')
  }

  public obtenerUsuario(){
    const url = `/users/${this.id}`
    return this.execQuery(url);
  }

  public updateUser(data){
    const url = `/users/${this.id}`
    return this.patchQuery(url, data);
  }

  public updatePassword(data){
    const url = `/users/update-password/${this.id}`
    return this.patchQuery(url, data);
  }

}
