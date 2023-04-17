import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NormalResultsRoutingModule } from './normal-results-routing.module';
import { NormalResultsComponent } from './normal-results.component';


@NgModule({
  declarations: [
    NormalResultsComponent
  ],
  imports: [
    CommonModule,
    NormalResultsRoutingModule
  ]
})
export class NormalResultsModule { }
