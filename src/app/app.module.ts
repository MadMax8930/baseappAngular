import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,  //module des routes en dernier, car page not found doit etre derniere
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// importer different modules
// demarer l'application
// grille de lecture: granularité
