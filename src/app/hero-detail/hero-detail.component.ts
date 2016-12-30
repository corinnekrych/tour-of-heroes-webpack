import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../services/hero.model';
import { HeroService } from '../services/hero.service';
import { SpinnerComponent } from '../spinner/spinner.component';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  isRequesting:boolean = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.isRequesting = true;
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(
        hero => {
          this.hero = hero;
          this.isRequesting = false;
        });
  }


  goBack(): void {
    this.location.back();
  }
}
