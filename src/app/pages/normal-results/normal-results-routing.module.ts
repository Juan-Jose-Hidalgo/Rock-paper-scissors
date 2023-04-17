import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalResultsComponent } from './normal-results.component';

const routes: Routes = [
  { path: '', component: NormalResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalResultsRoutingModule { }
