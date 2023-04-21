import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicGameRoutingModule } from './classic-game-routing.module';
import { ClassicBoardComponent } from './classic-board.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ClassicBoardComponent
  ],
  imports: [
    CommonModule,
    ClassicGameRoutingModule,
    ComponentsModule
  ]
})
export class ClassicGameModule { }
