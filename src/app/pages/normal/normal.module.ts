import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { NormalComponent } from './normal.component';


@NgModule({
  declarations: [
    NormalComponent
  ],
  exports: [
    NormalComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NormalRoutingModule,
  ]
})
export class NormalModule { }
