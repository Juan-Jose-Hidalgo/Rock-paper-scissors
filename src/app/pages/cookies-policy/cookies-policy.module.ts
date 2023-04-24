import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiesPolicyRoutingModule } from './cookies-policy-routing.module';
import { CookiesPolicyComponent } from './cookies-policy.component';


@NgModule({
  declarations: [
    CookiesPolicyComponent
  ],
  imports: [
    CommonModule,
    CookiesPolicyRoutingModule
  ]
})
export class CookiesPolicyModule { }
