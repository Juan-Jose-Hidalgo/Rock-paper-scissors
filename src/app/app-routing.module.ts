import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookieGuard } from './guards/cookie.guard';

const routes: Routes = [
  {
    path: 'home',
    title: 'Rock-Paper-Scissors | Home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'game',
    canActivate: [CookieGuard],
    loadChildren: () => import('./pages/play/play.module').then(m => m.NormalModule)
  },
  {
    path: 'cookies-policy',
    title: 'Rock-Paper-Scissors | Cookies Policy',
    loadChildren: () => import('./pages/cookies-policy/cookies-policy.module').then(m => m.CookiesPolicyModule)
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
