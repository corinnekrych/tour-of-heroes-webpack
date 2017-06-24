import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from './services/context.service';
import { HeroVisitedAction, VisitedAction } from './services/hero.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  constructor() {}
}
