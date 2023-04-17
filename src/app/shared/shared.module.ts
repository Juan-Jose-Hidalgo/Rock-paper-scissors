import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { ScoreComponent } from './score/score.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ScoreComponent,
  ],
  exports: [
    ButtonComponent,
    ScoreComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
