import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { ContextService } from '../services/context.service';
import { HeroService } from '../services/hero.service';
import { HeroSearchService } from '../services/hero-search.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import {HeroDetailModule } from '../hero-detail/hero-detail.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    HeroDetailModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    HeroSearchComponent
  ],
  exports: [
    HeroSearchComponent,
    HeroDetailComponent
  ],
  providers: [
    ContextService,
    HeroService,
    HeroSearchService
  ]
})
export class DashboardModule { }
