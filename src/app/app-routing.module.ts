import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    title: 'Rock-Paper-Scissors | Home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
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

  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
