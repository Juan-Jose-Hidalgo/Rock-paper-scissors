import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    title: 'Rock-Paper-Scissors | Home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'play-game',
    title: 'Rock-Paper-Scissors | Play',
    loadChildren: () => import('./pages/play/play.module').then(m => m.NormalModule)
  },

  {
    path: 'game-results',
    title: 'Rock-Paper-Scissors | Results',
    loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule)
  },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
