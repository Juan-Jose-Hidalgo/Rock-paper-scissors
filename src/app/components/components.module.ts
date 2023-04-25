import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { AcceptCookiesComponent } from './accept-cookies/accept-cookies.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { RulesComponent } from './rules/rules.component';
import { ScoreComponent } from './score/score.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AcceptCookiesComponent,
    ButtonComponent,
    FooterComponent,
    RulesComponent,
    ScoreComponent,
    FooterComponent,
  ],
  exports: [
    AcceptCookiesComponent,
    ButtonComponent,
    FooterComponent,
    RulesComponent,
    RouterModule,
    ScoreComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class ComponentsModule { }
