import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero, HeroVisitedAction, VisitedAction } from './hero.model';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable()
export class ContextService {

  recent: Observable<Hero[]> = new Observable<Hero[]>();
  addRecent: Subject<HeroVisitedAction> = new Subject<HeroVisitedAction>();
  deleteRecent: Subject<HeroVisitedAction> = new Subject<HeroVisitedAction>();

  constructor() {
    this.recent = Observable.merge(this.addRecent, this.deleteRecent)
      .scan((acc: Hero[], heroAction: HeroVisitedAction) => {
        if (heroAction.action == VisitedAction.Add) {
          let index = acc.findIndex(x => x.name == heroAction.hero.name);
          if (index == -1) {
            acc.push(heroAction.hero);
          }
        } else if (heroAction.action == VisitedAction.Delete) {
          let index = acc.findIndex(x => x.name == heroAction.hero.name);
          if (index > -1) {
            acc.splice(index, 1);
          }
        }
        return acc;
      }, []).share();
  }
}
