import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './form/form.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [UserComponent, FormComponent, LogoutComponent, LoginComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class UserModule { }
