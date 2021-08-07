import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CarouselPromosComponent } from './components/carousel-promos/carousel-promos.component';

import { ImgLazyLoadDirective } from './directives/img-lazy-load/img-lazy-load.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CarouselPromosComponent,
    ImgLazyLoadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
