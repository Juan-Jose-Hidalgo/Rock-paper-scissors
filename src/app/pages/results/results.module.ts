import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';

import { ResultsComponent } from './results.component';


@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ResultsRoutingModule,
  ]
})
export class ResultsModule { }
