import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../spinner/spinner.component';
import { RecentHeroComponent } from '../recent-hero/recent-hero.component';
import { ContextService } from '../services/context.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpinnerComponent,
    RecentHeroComponent
  ],
  exports: [
    SpinnerComponent,
    RecentHeroComponent
  ],
  providers: [ContextService],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

 }
