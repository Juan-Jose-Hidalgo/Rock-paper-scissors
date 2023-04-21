import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ScoreComponent } from './score/score.component';
import { RulesComponent } from './rules/rules.component';
import { NormalBoardComponent } from './normal-board/normal-board.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ScoreComponent,
    RulesComponent,
    NormalBoardComponent,
  ],
  exports: [
    ButtonComponent,
    ScoreComponent,
    RulesComponent,
    NormalBoardComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
