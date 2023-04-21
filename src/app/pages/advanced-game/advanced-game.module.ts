import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedGameRoutingModule } from './advanced-game-routing.module';
import { AdvancedGameComponent } from './advanced-game.component';


@NgModule({
  declarations: [
    AdvancedGameComponent
  ],
  imports: [
    CommonModule,
    AdvancedGameRoutingModule
  ]
})
export class AdvancedGameModule { }
