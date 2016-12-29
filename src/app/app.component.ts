import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './services/hero.model';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero) {
    if (hero === this.selectedHero) {
      this.clearSelection();
    } else {
      this.selectedHero = hero;
    }
  }

  clearSelection() {
    this.selectedHero = null;
  }

  getHeroes(): void {
    this.heroService.getHeroes(true).then(heroes => this.heroes = heroes);
  }
}
