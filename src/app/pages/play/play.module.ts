import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { PlayComponent } from './play.component';


@NgModule({
  declarations: [
    PlayComponent
  ],
  exports: [
    PlayComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PlayRoutingModule,
  ]
})
export class NormalModule { }
