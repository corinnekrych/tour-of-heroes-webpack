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
import { SharedModule } from './shared/shared.module';
// Fake In-Memory-Web-API
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// Load all necessary rxjs-extensions
import './rxjs-extensions';
import { ContextService } from './services/context.service';

import { HeroSearchService } from './services/hero-search.service';

export function getRandomDelay() {
  return Math.floor(Math.random() * 3000 - 1000 + 1000);
}

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [
    HeroSearchService,
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}
