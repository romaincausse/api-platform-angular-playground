import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { GreatingComponent } from './greating/greating.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GobackComponent } from './goback/goback.component';

@NgModule({
  declarations: [ MainNavComponent, HomeComponent, GreatingComponent, ErrorComponent, GobackComponent ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    
    MainNavComponent,
    GobackComponent
  ]
})
export class CoreModule { }
