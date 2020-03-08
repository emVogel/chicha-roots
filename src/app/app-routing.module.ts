import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwapiComponent } from './components/swapi/swapi.component';


const routes: Routes = [{path:'', component:SwapiComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
