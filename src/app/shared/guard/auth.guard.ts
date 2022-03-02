import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private toastr: ToastrService){}
  canActivate(): boolean {
    const token = this._authService.obtenerToken();
    console.log(token)
    if(token){
      return true;
    }else{
      this.toastr.warning('No tiene los permisos correspondientes');
      return false;
    }
  }
  
}
