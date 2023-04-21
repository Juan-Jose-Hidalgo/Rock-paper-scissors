import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassicGameRoutingModule } from './classic-game-routing.module';
import { ClassicBoardComponent } from './classic-board.component';


@NgModule({
  declarations: [
    ClassicBoardComponent
  ],
  imports: [
    CommonModule,
    ClassicGameRoutingModule
  ]
})
export class ClassicGameModule { }
