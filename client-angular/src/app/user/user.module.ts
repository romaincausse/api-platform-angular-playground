import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [UserComponent, FormComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class UserModule { }
