import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './pages/images/images.component';
import { GridPart1Component } from './pages/grid-part1/grid-part1.component';
import { NavBarAnimation1Component } from './pages/nav-bar-animation1/nav-bar-animation1.component';
import { GridGapComponent } from './pages/grid-gap/grid-gap.component';
import { MinmaxComponent } from './pages/minmax/minmax.component';
import { MinContentComponent } from './pages/min-content/min-content.component';
import { GridPropertyComponent } from './pages/grid-property/grid-property.component';

const routes: Routes = 
[
  {path:'image',component:ImagesComponent},
  {path:'grid',component:GridPart1Component},
  {path:'nav-bar1',component:NavBarAnimation1Component},
  {path:'gridgap',component:GridGapComponent},
  {path:'minmax',component:MinmaxComponent},
  {path:'mincontent',component:MinContentComponent},
  {path:'gridproperty',component:GridPropertyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
