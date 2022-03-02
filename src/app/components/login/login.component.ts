import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Admin } from '../../shared/interface/admin-model';
import { HttpErrorResponse } from '../../shared/interface/error-model';
import { DataUser } from '../../shared/interface/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  

  constructor(public router: Router, private _authService: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.forma = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public login(){
    const user = new Admin(
      this.forma.controls['username'].value,
      this.forma.controls['password'].value
    )
    this._authService.login(user).subscribe( (result: DataUser) => {
      const { access_token } = result;
      const { _id } = result.user;
      if(result.user.admin){
        localStorage.setItem('acces_token', access_token);
        localStorage.setItem('_id', _id);
        this.router.navigate(['dashboard']);
      }
    },(err: HttpErrorResponse) =>{
      this.toastr.error(err.error.message);
    });
  }

}
