import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ScoreComponent } from './score/score.component';



@NgModule({
  declarations: [
    ScoreComponent
  ],
  exports: [
    ScoreComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
