import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { ContextService } from '../services/context.service';
import { HeroService } from '../services/hero.service';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailModule } from '../hero-detail/hero-detail.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailModule,
    SharedModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent
  ],
  providers: [
    ContextService,
    HeroService
  ]
})
export class HeroesModule { }
