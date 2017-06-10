import { TestBed, inject, async } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { Hero, HeroVisitedAction, VisitedAction } from './hero.model';
import { Observable, Subject } from 'rxjs';
import { ContextService } from './context.service';

let service: ContextService;

describe('ContextService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ContextService]
    });
    service = TestBed.get(ContextService);
  }));

  it('should add to the list of recent', () => {
    // 1. given
    const wonderWoman = { hero: { name: "Diana", id: 1}, action: VisitedAction.Add} as HeroVisitedAction;
    // 3. then
    service.recent.subscribe(val => expect(val.length).toEqual(1));
    // 2. when
    service.addRecent.next(wonderWoman);
  });

  it('should add to the list of recent', async(() => {
    // given
    const wonderWoman = { hero: { name: "Diana", id: 1}, action: VisitedAction.Add} as HeroVisitedAction;
    const superman = { hero: { name: "Clark", id: 2}, action: VisitedAction.Add} as HeroVisitedAction;

    // then
    service.recent.subscribe(val => {
      expect(val[0]).toEqual(wonderWoman.hero);
      if (val.length > 2) {
        fail('recent should eventually contains 2 elements')
      }
    });

    // when
    service.addRecent.next(wonderWoman);
    service.addRecent.next(superman);
    service.addRecent.next(superman);
  }));

  it('should delete to the list of recent', async(() => {
    // given
    const wonderWomanAdd = { hero: { name: "Diana", id: 1}, action: VisitedAction.Add} as HeroVisitedAction;
    const wonderWomanDelete = { hero: { name: "Diana", id: 1}, action: VisitedAction.Delete} as HeroVisitedAction;

    // then
    let index = 0;
    service.recent.subscribe(val => {
      index++;
      if (index == 1) {
        expect(val[0]).toEqual(wonderWomanAdd.hero);
      }
      if (index == 2) {
        expect(val.length).toEqual(0);
      }
    });

    // when
    service.addRecent.next(wonderWomanAdd);
    service.addRecent.next(wonderWomanDelete);
  }));

  it('should not delete to the list of recent if not found in the recent hero', async(() => {
    // given
    const wonderWomanAdd = { hero: { name: "Diana", id: 1}, action: VisitedAction.Add} as HeroVisitedAction;
    const wonderWomanDelete = { hero: { name: "DianaRoss", id: 1}, action: VisitedAction.Delete} as HeroVisitedAction;

    // then
    let index = 0;
    service.recent.subscribe(val => {
      index++;
      if (index == 1) {
        expect(val[0]).toEqual(wonderWomanAdd.hero);
      }
      if (index == 2) {
        expect(val[0]).toEqual(wonderWomanAdd.hero);
        expect(val.length).toEqual(1);
      }
    });

    // when
    service.addRecent.next(wonderWomanAdd);
    service.addRecent.next(wonderWomanDelete);
  }));
});
