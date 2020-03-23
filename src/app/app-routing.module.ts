import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';
import { GridPart1Component } from './pages/grid-part1/grid-part1.component';
import { NavBarAnimation1Component } from './pages/nav-bar-animation1/nav-bar-animation1.component';

const routes: Routes = 
[
  {path:'image',component:ImagesComponent},
  {path:'grid',component:GridPart1Component},
  {path:'nav-bar1',component:NavBarAnimation1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
