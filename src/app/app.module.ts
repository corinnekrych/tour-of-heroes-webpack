import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './services/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';

// Fake In-Memory-Web-API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// Load all necessary rxjs-extensions
import './rxjs-extensions';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    SpinnerComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1090 }),
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
