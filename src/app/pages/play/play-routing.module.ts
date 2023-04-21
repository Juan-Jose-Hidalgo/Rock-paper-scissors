import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play.component';

const routes: Routes = [
  {
    path: '',
    component: PlayComponent,
    children: [
      {
        path: 'classic',
        title: 'Rock-Paper-Scissors | Play',
        loadChildren: () => import('../classic-game/classic-game.module').then(m => m.ClassicGameModule)
      },
      {
        path: 'lizard-spock',
        title: 'Rock-Paper-Scissors-Lizard-Spock | Play',
        loadChildren: () => import('../advanced-game/advanced-game.module').then(m => m.AdvancedGameModule)
      },
      {
        path: 'results',
        title: 'Rock-Paper-Scissors | Results',
        loadChildren: () => import('../results/results.module').then(m => m.ResultsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
