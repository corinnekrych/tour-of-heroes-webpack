import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Hero, HeroVisitedAction, VisitedAction } from '../services/hero.model';
import { HeroService } from '../services/hero.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ContextService } from '../services/context.service';
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
    private location: Location,
    private router: Router,
    private context: ContextService
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
    //this.location.back();
    let action: HeroVisitedAction = {action: VisitedAction.Refresh};
    this.router.navigateByUrl('/heroes').then(val => this.context.addRecent.next(action));
  }

  save(): void {
    this.heroService.update(this.hero)
                    .then(() => this.goBack());
  }
}
