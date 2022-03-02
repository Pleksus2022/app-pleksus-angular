import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UserProfileService } from '../services/user-profile.service';
import { ToastrService } from 'ngx-toastr';
import { DataUser, User } from '../shared/interface/user-model';
import { UserModel } from '../shared/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  forma: FormGroup;
  avatar: string;

  constructor(private _userProfile: UserProfileService, private toastr: ToastrService) { }

  ngOnInit() {

    this.forma = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email:  new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      oldPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      photo: new FormControl('')
    });

    this._userProfile.obtenerUsuario().subscribe( (next: User) => {
      this.forma.patchValue({
        username: next.username,
        email: next.username,
        firstName: next.firstName,
        lastName: next.lastName,
        phone: next.phone,
        photo: next.photo
      });
      this.avatar = next.photo;
    });
  }

  public userProfile(){
    const data = new UserModel(
      this.forma.get('username').value,
      this.forma.get('firstName').value,
      this.forma.get('lastName').value,
      this.forma.get('phone').value,
      this.forma.get('password').value
    );
    console.log(data)
    this._userProfile.updateUser(data).subscribe( next => {
      if(data.password !== null){
        this._userProfile.updatePassword(data).subscribe()
        this.toastr.success('Usuario actualizado correctamente')
      }else{
        this.toastr.success('Usuario actualizado correctamente')
      }
    },() => {
      this.toastr.error('Ha ocurrido un error')
    });
  }

  public fileChangeEvent(event: any){

    if(!event){
      return
    }
    const reader = new FileReader();
 
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.forma.patchValue({
          file: reader.result
        });
        
      };
    }
  }

  

}
