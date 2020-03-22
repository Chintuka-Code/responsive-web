import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';
import { GridPart1Component } from './pages/grid-part1/grid-part1.component';

const routes: Routes = 
[
  {path:'image',component:ImagesComponent},
  {path:'grid',component:GridPart1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
