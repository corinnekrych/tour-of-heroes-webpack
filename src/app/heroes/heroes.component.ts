import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Hero } from '../services/hero.model';
import { HeroService } from '../services/hero.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService, SpinnerComponent]
})
export class HeroesComponent implements OnInit {
  heroes:Hero[];
  selectedHero: Hero;
  isRequesting:boolean = false;

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
    this.isRequesting = true;
    this.heroService
        .getHeroes(true)
        .then(resolvedHeroes => { this.heroes = resolvedHeroes; this.isRequesting = false; });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
