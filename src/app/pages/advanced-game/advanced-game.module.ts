import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedGameRoutingModule } from './advanced-game-routing.module';
import { AdvancedGameComponent } from './advanced-game.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AdvancedGameComponent
  ],
  imports: [
    CommonModule,
    AdvancedGameRoutingModule,
    ComponentsModule
  ]
})
export class AdvancedGameModule { }
