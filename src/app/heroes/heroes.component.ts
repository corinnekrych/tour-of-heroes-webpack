import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../services/hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

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
    this.heroService.getHeroes(true).then(resolvedHeroes => this.heroes = resolvedHeroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
