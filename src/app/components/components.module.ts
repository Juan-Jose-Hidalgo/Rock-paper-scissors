import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AcceptCookiesComponent } from './accept-cookies/accept-cookies.component';
import { ButtonComponent } from './button/button.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreComponent } from './score/score.component';



@NgModule({
  declarations: [
    AcceptCookiesComponent,
    ButtonComponent,
    RulesComponent,
    ScoreComponent,
  ],
  exports: [
    AcceptCookiesComponent,
    ButtonComponent,
    RulesComponent,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
