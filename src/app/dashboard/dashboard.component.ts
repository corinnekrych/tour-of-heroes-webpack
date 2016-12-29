import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/hero.model';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    HeroService
  ]
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService
        .getHeroes()
        .then(resolvedHeroes => this.heroes = resolvedHeroes.slice(1,5));
  }
}
