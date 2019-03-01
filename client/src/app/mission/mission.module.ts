import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionComponent } from './mission.component';
import { CoreModule } from '../core/core.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [MissionComponent, FormComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class MissionModule { }
