import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const DECLARATIONS  = [
  FooterComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent
];

const MODULES = [
  CommonModule,
  RouterModule,
  NgbModule,
  FormsModule,
  ReactiveFormsModule,
]

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...DECLARATIONS
  ],
  exports: [
    ...DECLARATIONS
  ]
})
export class ComponentsModule { }
