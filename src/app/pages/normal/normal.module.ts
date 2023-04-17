import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalRoutingModule } from './normal-routing.module';

import { NormalComponent } from './normal.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NormalComponent
  ],
  exports: [
    NormalComponent
  ],
  imports: [
    CommonModule,
    NormalRoutingModule,
    SharedModule
  ]
})
export class NormalModule { }
