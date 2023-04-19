import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'normal-game',
    title: 'Start Game',
    loadChildren: () => import('./pages/normal/normal.module').then(m => m.NormalModule)
  },

  {
    path: 'normal-game-results',
    title: 'Game Results',
    loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule)
  },

  { path: '**', redirectTo: 'normal-game', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
