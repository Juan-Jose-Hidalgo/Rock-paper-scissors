import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ScoreComponent } from './score/score.component';
import { RulesComponent } from './rules/rules.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ScoreComponent,
    RulesComponent,
  ],
  exports: [
    ButtonComponent,
    ScoreComponent,
    RulesComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
