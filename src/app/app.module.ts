import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './pages/images/images.component';
import { GridPart1Component } from './pages/grid-part1/grid-part1.component';
import { NavBarAnimation1Component } from './pages/nav-bar-animation1/nav-bar-animation1.component';
import { GridGapComponent } from './pages/grid-gap/grid-gap.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    GridPart1Component,
    NavBarAnimation1Component,
    GridGapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
