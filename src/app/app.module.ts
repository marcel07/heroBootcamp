import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [HeroesComponent]
})
export class AppModule { }
