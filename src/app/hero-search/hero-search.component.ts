import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Hero, VisitedAction, HeroVisitedAction } from '../services/hero.model';
import { ContextService } from '../services/context.service';
import { HeroSearchService } from '../services/hero-search.service';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [ContextService]
})
export class HeroSearchComponent implements OnInit {
  heroes:Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private heroSearchService:HeroSearchService,
    private router:Router,
    private contextService: ContextService
  ) { }

  search(term:string):void {
    this.searchTerms.next(term);
  }

  ngOnInit():void {
    this.heroes = this.searchTerms
                      .debounceTime(300)
                      .distinctUntilChanged()
                      .switchMap(term => term         // switch to new observable each time
                                         ? this.heroSearchService.search(term)    // return the http search observable
                                         : Observable.of<Hero[]>([]))             // or the observable of empty heroes if no search term
                      .catch(error => {
                        console.error(error);
                        return Observable.of<Hero[]>([]);
                      });
  }

  gotoDetail(hero:Hero):void {
    this.contextService.addRecent.next({hero: hero, action:VisitedAction.Add} as HeroVisitedAction);

    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
