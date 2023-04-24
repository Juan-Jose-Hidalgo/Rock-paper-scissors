import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
