import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../services/hero.model';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  heroes:Hero[];
  isRequesting:boolean = false;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isRequesting = true;
    this.heroService
        .getHeroes()
        .then(resolvedHeroes => {
          this.heroes = resolvedHeroes.slice(1,5);
          this.isRequesting = false;
        });
  }
}
